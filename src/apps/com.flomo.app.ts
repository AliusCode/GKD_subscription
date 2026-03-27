import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flomo.app',
  name: 'flomo浮墨笔记',
  groups: [
    {
      key: 1,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: [
            '[text="觉得 flomo 怎么样？"]',
            '[text="暂不提醒"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23935802',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-启动后自动点击新建卡片',
      desc: '仅开屏后触发一次',
      rules: [
        {
          matchTime: 5000,
          actionMaximum: 1,
          resetMatch: 'app',
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: '[vid="btnCreateMemo"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26307856',
        },
      ],
    },
  ],
});
