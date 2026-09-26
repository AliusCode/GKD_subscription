"""把 GKD 快照导出为缩进的节点树文本，便于阅读和设计选择器。

用法：
    python dump_tree.py <快照.zip | 解压目录 | .json> [...] [-o 输出目录]

每行格式：#节点id 类名 vid=..(没有 vid 时显示 id=..) text=.. desc=.. [C=可点击] [INV=不可见] [QF=..] [NQF=..] [left,top,right,bottom] cc=子节点数 i=index
QF=id/text 表示该节点可以按 id(vid)/text 快速查询（即 i.gkd.li 上加粗的节点），NQF 表示实测不支持；
旧版 GKD 的快照没有这两个字段，不会显示。
不指定 -o 时直接打印到标准输出。
"""

from __future__ import annotations

import argparse
import io
import sys
from pathlib import Path

from snapshot_io import load_snapshot


def format_node(node: dict) -> str:
    """把单个节点格式化为一行文本（不含缩进）。"""
    a = node["attr"]
    parts = [f"#{node['id']}", (a.get("name") or "").split(".")[-1]]
    # 没有 vid 时（如 android:id/xxx 这类非本应用的 id）显示完整 id
    for key in ("vid" if a.get("vid") else "id", "text", "desc"):
        if a.get(key):
            parts.append(f"{key}={a[key]!r}")
    if a.get("clickable"):
        parts.append("C")
    if not a.get("visibleToUser"):
        parts.append("INV")
    # idQf/textQf 是抓快照时在真机上实测的结果：True 可快速查询，False 不可，None 未测
    qf = {True: [], False: []}
    for key in ("id", "text"):
        value = node.get(f"{key}Qf")
        if value is not None:
            qf[value].append(key)
    if qf[True]:
        parts.append("QF=" + ",".join(qf[True]))
    if qf[False]:
        parts.append("NQF=" + ",".join(qf[False]))
    parts.append(
        f"[{a.get('left')},{a.get('top')},{a.get('right')},{a.get('bottom')}] cc={a.get('childCount')} i={a.get('index')}"
    )
    return " ".join(parts)


def dump(snapshot: dict) -> str:
    """把整个快照导出为缩进树文本，第一行是快照概要信息。"""
    nodes = snapshot["nodes"]
    children: dict[int, list[dict]] = {}
    for n in nodes:
        children.setdefault(n.get("pid", -1), []).append(n)
    header = (
        f"activity={snapshot.get('activityId')} id={snapshot.get('id')} "
        f"screen={snapshot.get('screenWidth')}x{snapshot.get('screenHeight')} nodes={len(nodes)}"
    )
    lines = [header]

    # 用显式栈代替递归，避免极深节点树触发递归上限
    stack = [(n, 0) for n in reversed(children.get(-1, []))]
    while stack:
        node, depth = stack.pop()
        lines.append("  " * depth + format_node(node))
        stack.extend((c, depth + 1) for c in reversed(children.get(node["id"], [])))
    return "\n".join(lines)


def main() -> None:
    """命令行入口。"""
    parser = argparse.ArgumentParser(description="导出 GKD 快照节点树")
    parser.add_argument(
        "paths", nargs="+", type=Path, help="快照 zip / 解压目录 / json"
    )
    parser.add_argument(
        "-o", "--out", type=Path, help="输出目录，每个快照写一个 <id>.tree.txt"
    )
    args = parser.parse_args()

    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    for path in args.paths:
        snapshot, source = load_snapshot(path)
        text = dump(snapshot)
        if args.out:
            args.out.mkdir(parents=True, exist_ok=True)
            out = args.out / f"{snapshot.get('id')}.tree.txt"
            out.write_text(text, encoding="utf-8")
            print(f"{source} -> {out}")
        else:
            print(f"===== {source}")
            print(text)


if __name__ == "__main__":
    main()
