import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moonshot.kimichat',
  name: 'Kimi',
  groups: [
    {
      key: 1,
      name: '评价提示',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '[text="残忍拒绝"] < @View[clickable=true] -n [text^="感谢喜欢 Kimi"][text*="打个分吧"]',
          snapshotUrls: 'https://i.gkd.li/i/31449987',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '[text="稍后再说"] < @View[clickable=true] -n [text="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/i/31450087',
        },
      ],
    },
  ],
});
