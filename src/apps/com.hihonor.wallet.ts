import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.wallet',
  name: '荣耀钱包',
  groups: [
    {
      key: 1,
      name: '功能类-奖励后自动退广告',
      desc: '获得奖励后自动退出视频',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hihonor.adsdk.reward.RewardActivity',
          matches:
            '[text="已获得奖励"][visibleToUser=true] <n [vid="ad_label_count"] + [childCount=3] > [vid="ad_video_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/31094041',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-进广告视频自动关声',
      actionMaximum: 1, // 限制点击次数为1次
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hihonor.adsdk.reward.RewardActivity',
          matches:
            '[vid="ad_volume_close"] > [vid="ad_video_volume"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31094038',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hihonor.adsdk.reward.RewardActivity',
          matches: '[vid="ad_close_dialog"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/31248363',
          exampleUrls: 'https://e.gkd.li/457f1d00-a7ea-43cb-9263-be9a012bf310',
        },
      ],
    },
  ],
});
