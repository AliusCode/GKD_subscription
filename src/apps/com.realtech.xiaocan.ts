import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="box_custom"] >2 [vid="ivClose"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/31689742',
            'https://i.gkd.li/i/31689746',
          ],
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            'View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13694864',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-签到成功弹窗',
      desc: '点击[关闭]按钮',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '[id="android:id/content"] >5 View[childCount=6] > ImageView[index=5][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14290847',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-定位权限',
      desc: '底部横幅, 点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="location_layout"] > [vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/31689754',
        },
      ],
    },
    {
      key: 4,
      name: '其他-点击1次[只看可抢]',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches: '@[vid="switchBtn"] - [text="只看可抢"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31689754',
          exampleUrls: 'https://e.gkd.li/d856c10c-b772-423a-a740-73be7cc7e091',
        },
      ],
    },
  ],
});
