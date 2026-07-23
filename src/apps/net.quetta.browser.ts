import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.quetta.browser',
  name: 'Quetta',
  groups: [
    {
      key: 1,
      name: '功能类-自动跳转第三方应用',
      desc: '点击[前往应用打开]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches: '[text="前往应用打开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/30294905',
          exampleUrls: 'https://e.gkd.li/fe296c51-cf5c-4a6f-a7b8-00a4dc194d5d',
        },
      ],
    },
  ],
});
