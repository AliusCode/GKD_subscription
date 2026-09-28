import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.baidu.browser',
  name: '(荣耀)浏览器',
  groups: [
    {
      key: 1,
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
            '@[text*="跳过"][clickable=true] <3 LinearLayout[childCount=3] +2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/32739487',
        },
      ],
    },
  ],
});
