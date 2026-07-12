import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dsm.secondlock',
  name: '德施曼智能',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.main.MainActivity',
            'com.dsm.message.activity.MessageActivity',
          ],
          matches: '[vid="ivCancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29934451',
            'https://i.gkd.li/i/29934452',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="ivCloseBanner"]',
          snapshotUrls: 'https://i.gkd.li/i/29934453',
        },
      ],
    },
  ],
});
