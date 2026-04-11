import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'eu.smartpatient.mytherapy',
  name: 'MyTherapy',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '形式1',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '@Button[index=parent.childCount.minus(1)][clickable=true] < * <(2,3) View <n [id="mys-content"] <<10  [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26159508',
            'https://i.gkd.li/i/26159509',
            'https://i.gkd.li/i/26159510',
          ],
          exampleUrls: [
            'https://e.gkd.li/012e3aca-4d19-46e4-8873-5e4b15cec187',
            'https://e.gkd.li/631c83f3-097b-43e2-a05a-b5349ef211fc',
          ],
        },
        {
          key: 1,
          name: '形式2',
          fastQuery: true,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '[desc="Interstitial close button"][visibleToUser=true] < @FrameLayout[index=parent.childCount.minus(1)] <2 * < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26646224',
          exampleUrls: 'https://e.gkd.li/5400ee80-9f09-426e-97b8-2e0e18add6a3',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-快速添加按需药物',
      desc: '添加一次性条目-按需要(第一个)',
      activityIds: '.feature.mainactivity.MainActivity',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches:
            'ScrollView >2 @[clickable=true] > [id="logOneTimeEntry"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26223457',
          exampleUrls: 'https://e.gkd.li/6cef22b5-89f0-4a39-ab01-4df740d1556b',
        },
        {
          key: 1, // 快捷方式进入后失效,不能用prekeys
          matches:
            'ScrollView > TextView + @View[clickable=true] > TextView[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26223492',
          exampleUrls: 'https://e.gkd.li/a1fa2f0b-a011-42bc-b6f4-d520007cf036',
        },
      ],
    },
  ],
});
