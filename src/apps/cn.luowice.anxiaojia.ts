import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.luowice.anxiaojia',
  name: '安小家',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击[x]掉',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.example.anxiaojia.MainActivity',
          matches:
            '@View[id=""][text=null][clickable=true][width<107][height<107] - ImageView[width>540] < [childCount=2] < View < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/27126440',
        },
        {
          key: 2,
          activityIds: 'com.byazt.x.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[width<72] < View < View - View > [visibleToUser=true][text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/30507034',
        },
      ],
    },

    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.example.anxiaojia.MainActivity',
          matches:
            '@[desc="下次再说"] <n View < View < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28833151',
        },
      ],
    },
  ],
});
