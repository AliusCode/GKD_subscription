import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.theme',
  name: '(vivo)主题',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/30565834',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-推广弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.Theme',
          matches: '[vid="card_close_img"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8207ec80-6e9d-4b9e-9880-7370d826c405',
          snapshotUrls: 'https://i.gkd.li/i/14904298',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-[添加主题卡片至桌面]弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matches: '@[vid="cancel"] + * > [text="智慧桌面"]',
          exampleUrls:
            'https://m.gkd.li/57941037/45df70c2-55bc-428a-91cf-40dff23ae2af',
          snapshotUrls: 'https://i.gkd.li/i/14904036',
        },
      ],
    },
  ],
});
