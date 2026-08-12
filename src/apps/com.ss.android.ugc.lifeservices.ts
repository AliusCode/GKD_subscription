import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.lifeservices',
  name: '抖省省',
  groups: [
    {
      key: 1,
      name: '功能类-自动[放弃支付]',
      desc: '弹窗-点击[放弃支付]',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[visibleToUser=true][desc^="放弃支付"]',
          snapshotUrls: 'https://i.gkd.li/i/30941609',
          exampleUrls: 'https://e.gkd.li/f93e7986-a67c-4f9f-a553-82d683a0d42e',
        },
      ],
    },
  ],
});
