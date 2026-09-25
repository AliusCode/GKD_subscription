import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.One.WoodenLetter',
  name: '一个木函',
  groups: [
    {
      key: 1,
      name: '局部广告',
      desc: 'x掉',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            'ImageView[width>540] + View -> ImageView[width<71] - View[text=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25547842',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      desc: '①勾选[不再显示] ②点击x掉',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          name: '①勾选[不再显示]',
          matches: '[text="不再显示"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/29465827', // 未勾选
        },
        {
          key: 1,
          name: '②点击x掉',
          matches: ['[text*="好评"]', '[vid="dialog_close_view"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/28805036',
            'https://i.gkd.li/i/29465828', // 已勾选 [checked=true]
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-[关闭]保存成功弹窗',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          forcedTime: 1800000, //主动查询半小时,防止不触发第2次
          activityIds: [
            '.MainActivity',
            '.program.devicetools.appmanager.AppManagerActivity', //应用管理页
            '.program.imageutils.', //图片工具...
          ],
          matches: '[getChild(0).text*="保存成功"] + [vid="dialog_close_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/32636850', //导出当前壁纸
            'https://i.gkd.li/i/32635902', //导出安装包
            'https://i.gkd.li/i/32636933', //图片拼接
            'https://i.gkd.li/i/32636972', //九宫切图
          ],
          exampleUrls: 'https://e.gkd.li/5c650324-bf22-4d9f-9fe0-2c0b738040c4',
        },
      ],
    },
  ],
});
