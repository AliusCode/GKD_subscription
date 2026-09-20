import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/32436978',
          exampleUrls: 'https://e.gkd.li/cf0112a6-887e-4dd3-ba53-6dfdb592bf03',
        },
        {
          key: 1,
          matches:
            'TextView[width<200] - @View[clickable=true][width<170 && height<170] - FrameLayout[childCount=1][height=getPrev(2).height] <2 [childCount=4] <2 FrameLayout < [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/32436980',
          exampleUrls: 'https://e.gkd.li/ef7dc5c7-ad3d-45e8-8fa2-ae9a4c279052',
        },
        {
          key: 2,
          matches:
            '@ImageView[width<140 && height<140][visibleToUser=true][vid=null][text=null] < * < ViewGroup +n ViewGroup[index=parent.childCount.minus(1)] >2 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/32437199',
            'https://i.gkd.li/i/32436976',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-右下角悬浮卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.activity.MainActivity',
            '.activity.MainFlutterActivity',
          ],
          matches: '[vid="operating_activity_close_view"]',
          exampleUrls: 'https://e.gkd.li/29b1cea7-6984-4d51-b1a0-f5ffd1b0d727',
          snapshotUrls: [
            'https://i.gkd.li/i/14140100',
            'https://i.gkd.li/i/16517211',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '更新提示-内测邀请弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.tencent.upgrade.ui.UpgradeDialogActivity',
          matches: '[vid="upgrade_dialog_close_btn"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/03e35d57-5f40-4ccb-911a-5f9061eab46e',
          snapshotUrls: 'https://i.gkd.li/i/14376088',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-阅读页面广告',
      desc: '点击关闭-点击[关闭本条广告]',
      fastQuery: true,
      activityIds: '.activity.ReaderPageActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="关闭广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/70e15d7d-0911-44e7-b0d6-a8e74c00b8b1',
          snapshotUrls: 'https://i.gkd.li/i/14767123',
        },
        {
          key: 1,
          matches: '[vid="adv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/eb2bca3c-abbc-4666-b505-cdaeeec6a839',
          snapshotUrls: 'https://i.gkd.li/i/14767126',
        },

        // 预留key
        {
          preKeys: [0, 1],
          key: 50,
          matches: '[vid="view_close_ad_btn_bg"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c985da66-c2cc-4400-bb61-8f7ee6dbba11',
          snapshotUrls: [
            'https://i.gkd.li/i/14767165',
            'https://i.gkd.li/i/14767124',
          ],
        },
      ],
    },
  ],
});
