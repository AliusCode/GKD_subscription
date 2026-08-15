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
  ],
});
