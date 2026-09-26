"""GKD 快照脱敏：替换节点敏感文本，并用纯色矩形遮盖截图中的敏感区域。

用法：
    python desensitize.py <快照.zip> [选项...]

选项：
    --node ID[:字段][=替换文本]  替换节点文本，可重复。字段为 text / desc，省略时处理两者中非空的字段；
                                 省略替换文本时按官方建议替换为等长的 *
    --mask-node ID              用该节点的 left/top/right/bottom 在截图上打码，可重复
    --rect X1,Y1,X2,Y2          在截图上按坐标打码，可重复
    --color RRGGBB              打码颜色，默认 000000（黑色）
    --out 路径                  写到新文件；省略时原地覆盖，并先备份为 <原名>.bak.zip
    --preview 路径              另存一份处理后的截图，方便用图片查看器检查；扩展名会自动改成与截图格式一致

截图格式：
    png 截图用纯标准库处理；新版 GKD 的 webp 截图打码需要 Pillow（pip install Pillow），
    只替换节点文本时不需要。

示例：
    python desensitize.py 快照/QQ_xxx.zip --node 18 --node 23:desc=动态内容 --mask-node 76 --preview out.png
"""

from __future__ import annotations

import argparse
import io
import json
import re
import shutil
import struct
import sys
from pathlib import Path

import png_rgba
from snapshot_io import read_zip, write_zip

TEXT_FIELDS = ("text", "desc")
SCREENSHOT_SUFFIXES = (".png", ".webp")
# 有损 webp 重新编码的质量
WEBP_QUALITY = 90


def parse_node_arg(value: str) -> tuple[int, str | None, str | None]:
    """解析 --node 参数，返回 (节点 id, 字段或 None, 替换文本或 None)。"""
    m = re.fullmatch(r"(\d+)(?::(text|desc))?(?:=(.*))?", value, re.DOTALL)
    if not m:
        raise argparse.ArgumentTypeError(
            f"--node 格式应为 ID[:text|desc][=替换文本]，收到: {value}"
        )
    return int(m.group(1)), m.group(2), m.group(3)


def parse_rect(value: str) -> tuple[int, int, int, int]:
    """解析 --rect 参数。"""
    parts = [int(p) for p in value.split(",")]
    if len(parts) != 4:
        raise argparse.ArgumentTypeError(f"--rect 格式应为 X1,Y1,X2,Y2，收到: {value}")
    return parts[0], parts[1], parts[2], parts[3]


def parse_color(value: str) -> tuple[int, int, int]:
    """解析 RRGGBB 颜色。"""
    value = value.lstrip("#")
    if not re.fullmatch(r"[0-9a-fA-F]{6}", value):
        raise argparse.ArgumentTypeError(f"--color 格式应为 RRGGBB，收到: {value}")
    return int(value[0:2], 16), int(value[2:4], 16), int(value[4:6], 16)


def replace_texts(
    snapshot: dict, specs: list[tuple[int, str | None, str | None]]
) -> list[str]:
    """按参数替换节点文本，返回修改记录。"""
    nodes = {n["id"]: n for n in snapshot["nodes"]}
    log = []
    for node_id, field, replacement in specs:
        if node_id not in nodes:
            raise SystemExit(f"节点 #{node_id} 不存在")
        attr = nodes[node_id]["attr"]
        fields = [field] if field else [f for f in TEXT_FIELDS if attr.get(f)]
        if not fields:
            raise SystemExit(f"节点 #{node_id} 没有 text/desc 可替换")
        for f in fields:
            old = attr.get(f) or ""
            # 官方建议：替换为等量的 *，保持文本长度不变
            new = replacement if replacement is not None else "*" * len(old)
            attr[f] = new
            log.append(f"#{node_id}.{f}: {old!r} -> {new!r}")
    return log


def node_rect(snapshot: dict, node_id: int) -> tuple[int, int, int, int]:
    """取节点在截图上的矩形区域。"""
    for n in snapshot["nodes"]:
        if n["id"] == node_id:
            a = n["attr"]
            return a["left"], a["top"], a["right"], a["bottom"]
    raise SystemExit(f"节点 #{node_id} 不存在")


def webp_is_lossless(data: bytes) -> bool:
    """遍历 RIFF chunk，图像数据为 VP8L 时是无损 webp。"""
    pos = 12
    while pos + 8 <= len(data):
        kind = data[pos : pos + 4]
        (length,) = struct.unpack("<I", data[pos + 4 : pos + 8])
        if kind in (b"VP8 ", b"VP8L"):
            return kind == b"VP8L"
        pos += 8 + length + (length & 1)
    return False


def mask_webp(
    data: bytes, rects: list[tuple[int, int, int, int]], rgb: tuple[int, int, int]
) -> tuple[bytes, list[tuple[int, int, int, int]]]:
    """用 Pillow 给 webp 截图打码，保持原有的有损/无损编码和 ICC 配置，返回 (新图片, 实际填充区域)。"""
    try:
        from PIL import Image, ImageDraw
    except ImportError:
        raise SystemExit(
            "截图是 webp 格式，打码需要 Pillow，请先安装：pip install Pillow"
        ) from None

    img = Image.open(io.BytesIO(data))
    img.load()
    draw = ImageDraw.Draw(img)
    fill = rgb if img.mode == "RGB" else (*rgb, 255)
    filled = []
    for left, top, right, bottom in rects:
        left, right = max(0, left), min(img.width, right)
        top, bottom = max(0, top), min(img.height, bottom)
        if left >= right or top >= bottom:
            filled.append((left, top, left, top))
            continue
        # Pillow 的矩形包含右、下边界，和 png_rgba.fill_rect 保持一致需要减 1
        draw.rectangle((left, top, right - 1, bottom - 1), fill=fill)
        filled.append((left, top, right, bottom))

    out = io.BytesIO()
    options = (
        {"lossless": True} if webp_is_lossless(data) else {"quality": WEBP_QUALITY}
    )
    img.save(out, "WEBP", icc_profile=img.info.get("icc_profile"), **options)
    return out.getvalue(), filled


def mask_screenshot(
    name: str,
    data: bytes,
    rects: list[tuple[int, int, int, int]],
    rgb: tuple[int, int, int],
) -> tuple[bytes, list[tuple[int, int, int, int]]]:
    """按截图格式打码，返回 (新图片, 实际填充区域)。"""
    if name.endswith(".webp"):
        return mask_webp(data, rects, rgb)
    img = png_rgba.decode(data)
    filled = [png_rgba.fill_rect(img, *rect, rgb) for rect in rects]
    return png_rgba.encode(img), filled


def main() -> None:
    """命令行入口。"""
    parser = argparse.ArgumentParser(
        description="GKD 快照脱敏", formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument("zip", type=Path, help="快照 zip 文件")
    parser.add_argument("--node", type=parse_node_arg, action="append", default=[])
    parser.add_argument("--mask-node", type=int, action="append", default=[])
    parser.add_argument("--rect", type=parse_rect, action="append", default=[])
    parser.add_argument("--color", type=parse_color, default=(0, 0, 0))
    parser.add_argument("--out", type=Path)
    parser.add_argument("--preview", type=Path)
    args = parser.parse_args()

    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    if not (args.node or args.mask_node or args.rect):
        parser.error("至少需要一个 --node / --mask-node / --rect")

    infos, data = read_zip(args.zip)
    json_name = next(n for n in data if n.endswith(".json"))
    snapshot = json.loads(data[json_name].decode("utf-8"))

    for line in replace_texts(snapshot, args.node):
        print("文本", line)
    data[json_name] = json.dumps(
        snapshot, ensure_ascii=False, separators=(",", ":")
    ).encode("utf-8")

    rects = [node_rect(snapshot, i) for i in args.mask_node] + list(args.rect)
    shot_name = next((n for n in data if n.endswith(SCREENSHOT_SUFFIXES)), None)
    if rects:
        if shot_name is None:
            raise SystemExit("快照内没有 png / webp 截图，无法打码")
        data[shot_name], filled = mask_screenshot(
            shot_name, data[shot_name], rects, args.color
        )
        for rect in filled:
            print("打码", rect)
    if args.preview and shot_name:
        preview = args.preview.with_suffix(Path(shot_name).suffix)
        preview.write_bytes(data[shot_name])
        print("截图预览 ->", preview)

    target = args.out or args.zip
    if args.out is None:
        backup = args.zip.with_name(args.zip.stem + ".bak.zip")
        if backup.exists():
            print("备份已存在，不覆盖:", backup)
        else:
            shutil.copy2(args.zip, backup)
            print("已备份 ->", backup)
    write_zip(target, infos, data)
    print("已写入 ->", target)


if __name__ == "__main__":
    main()
