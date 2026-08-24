import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jin10',
  name: '金十数据',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.lgd.update.UpdateActivity',
          matches: '@[vid="update_cancel"] + [vid="iv_pic"]',
          snapshotUrls: 'https://i.gkd.li/i/12706043',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.lgd.biz.MainActivity',
          matches:
            '[id$="iv_body" || id$="iv_pic" || vid="body_ad"] <n [visibleToUser=true] > [vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12706045', //旧快照 iv_body
            'https://i.gkd.li/i/12706047', //旧快照 iv_pic
            'https://i.gkd.li/i/31375320', // body_ad
          ],
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-会员页面顶部广告',
      rules: [
        {
          activityIds: '.lgd.biz.MainActivity',
          matches: '[vid="iv_header"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12706051',
        },
      ],
    },
  ],
});
