import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kylindev.totalk',
  name: '滔滔对讲',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true] > [text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/30350919',
        },
      ],
    },
  ],
});
