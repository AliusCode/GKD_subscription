import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.android.cloudgame',
  name: '网易云游戏',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            '@[vid="guide_close_btn"][clickable=true][visibleToUser=true] - [vid="content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/25573586',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      fastQuery: true,
      activityIds: ['.activity.MainActivity', '.plugin.ad.AdsRewardActivity'],
      rules: [
        {
          key: 0,
          name: '腾讯sdk',
          anyMatches: [
            '@ImageView[clickable=true] - * < RelativeLayout +n [text="精选推荐"][visibleToUser=true]',
            '@ImageView[index=parent.childCount.minus(1)] < FrameLayout <3 FrameLayout +2 FrameLayout > LinearLayout > [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25620233',
            'https://i.gkd.li/i/26313264',
            'https://i.gkd.li/i/25619258', // 形式2
          ],
          exampleUrls: [
            'https://e.gkd.li/b1194340-db45-4ece-85a5-04447b12a2e9',
            'https://e.gkd.li/d1a76240-5873-4e59-b856-9c59f395e46f',
            'https://e.gkd.li/217312d8-5dd5-48c3-a6c2-448608674957', // 形式2
          ],
        },
        {
          key: 1,
          name: '百度sdk',
          anyMatches: [
            '@ImageView[clickable=true] + RelativeLayout > * > [text="精选推荐"][visibleToUser=true]',
            '@ImageView[clickable=true] - [text="查看详情"] -n RelativeLayout > [text$="广告"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/26312930',
            'https://i.gkd.li/i/26313348',
            'https://i.gkd.li/i/25573743', // 形式2
          ],
          exampleUrls: [
            'https://e.gkd.li/3e89a49d-3c93-4b6d-8071-85ab6e75f761',
            'https://e.gkd.li/04b09c16-20d5-41fe-bc72-72649fc06af7',
            'https://e.gkd.li/217312d8-5dd5-48c3-a6c2-448608674957', // 形式2
          ],
        },
        {
          key: 2,
          name: '穿山甲sdk',
          matches:
            '@ImageView[index=parent.childCount.minus(1)] <n RelativeLayout -2 RelativeLayout <<6 [vid="sign_ad_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/25574104',
          exampleUrls: 'https://e.gkd.li/91afc489-ac6e-452c-9b75-d15336e11989',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动签到',
      desc: '自动点击签到领时长',
      fastQuery: true,
      activityIds: '.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '[vid="sign_btn"][text="签到"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25574104',
        },
        {
          preKeys: [0],
          matches: '[vid="sign_title"] + [vid="sign_acquire_title"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25574182',
        },
      ],
    },
  ],
});
