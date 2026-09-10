import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shanxiang.wangxiao',
  name: '山香网校',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[vid="iv_advertising"] + [vid="countDownView"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26356382', //含倒计时的跳过
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.main.MainFragmentActivity',
          matches: '[vid="iv_ad"] + [vid="ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/32035807',
          exampleUrls: 'https://e.gkd.li/284033d3-fd1b-4e24-92ab-d807c7ddbde7',
        },
      ],
    },
  ],
});
