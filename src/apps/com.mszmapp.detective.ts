import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mszmapp.detective',
  name: '百变大侦探',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.home.HomeActivity',
          matches: '[vid="rvActivityPopups"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/31164272',
        },
      ],
    },
  ],
});
