import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.localsend.localsend_app',
  name: 'LocalSend',
  groups: [
    {
      key: 1,
      name: '功能类-文件传输时自动点击[高级]',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          actionCd: 3500,
          // actionMaximum: 1,
          forcedTime: 100000, // 100秒内一直主动参与屏幕查询  https://github.com/Lin-arm/GKD_subscription/discussions/93
          activityIds: '.MainActivity',
          matches:
            '@[desc="高级"] < View <2 View[childCount=2] < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26321028',
          excludeSnapshotUrls: 'https://i.gkd.li/i/26314724', // 高级信息已显示
          exampleUrls: 'https://e.gkd.li/54a7208c-03b2-4e74-a8ed-99829d72c8c5',
        },
      ],
    },
  ],
});
