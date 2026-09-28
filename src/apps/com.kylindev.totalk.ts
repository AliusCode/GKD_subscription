import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kylindev.totalk',
  name: '滔滔对讲',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 1,
          matches: '[vid="adgain_splash_skip_ll"]',
          snapshotUrls: 'https://i.gkd.li/i/30350919',
        },
      ],
    },
    {
      key: 2,
      name: '其他-开屏误触兜底',
      desc: '误进广告页后自动退出',
      scopeKeys: [0], //关联开屏广告规则
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '按[返回键]',
          preKeys: [1],
          fastQuery: true,
          action: 'back',
          activityIds: 'com.adgain.sdk.base.activity.AdActivity',
          matches: '[id="android:id/decor_content_parent"]',
          snapshotUrls: 'https://i.gkd.li/i/32742369',
        },
      ],
    },
  ],
});
