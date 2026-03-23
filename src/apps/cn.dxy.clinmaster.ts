import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.clinmaster',
  name: '临床决策',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.dxy.clinmaster.home.MainActivity',
          matches:
            '@[vid="iv_close"][clickable=true][visibleToUser=true] -2 [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/25459821',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动点击翻译',
      desc: '引用内容-翻译',
      fastQuery: true,
      activityIds: '.home.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[text="翻译"][visibleToUser=true] < View[index=parent.childCount.minus(1)] <n View <2 * <2 * <<4 View <2 * < * < ComposeView < [id="android:id/content"]',
          excludeMatches:
            '@[text="已翻译"][visibleToUser=true] < View[index=parent.childCount.minus(1)] <n View <2 * <2 * <<4 View <2 * < * < ComposeView < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26181124',
          excludeSnapshotUrls: 'https://i.gkd.li/i/26181123',
          exampleUrls: [
            'https://e.gkd.li/fdb000e8-fda4-472a-904d-56a9d7c1edd2',
            'https://e.gkd.li/27bf621f-41cd-49e1-8923-54ce66d5d4a9',
          ],
        },
      ],
    },
  ],
});
