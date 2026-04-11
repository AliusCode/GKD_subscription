import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.azure.authenticator',
  name: 'Authenticator',
  groups: [
    {
      key: 1,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.ngc.msa.MsaSessionActivity',
          matches: '[childCount=3] >2 ScrollView >2 [text$="推荐此应用?"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/26644370',
          exampleUrls: 'https://e.gkd.li/cc8d99b6-c44d-4377-ab1f-2af85019d3c4',
        },
      ],
    },
  ],
});
