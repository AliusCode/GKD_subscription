import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.adobe.psmobile',
  name: 'Photoshop Express',
  groups: [
    {
      key: 1,
      name: '评价提示',
      desc: '点击[不,谢谢]',
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter', // 用 clickNode 点击无效
          activityIds: '.MainActivity',
          matches:
            '@[desc="不，谢谢"] < [childCount=2] <4 View[childCount=4] < View < WebView < * < * < [id="android:id/custom"]',
          snapshotUrls: 'https://i.gkd.li/i/26115696',
        },
      ],
    },
  ],
});
