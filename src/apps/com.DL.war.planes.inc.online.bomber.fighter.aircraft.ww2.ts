import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.DL.war.planes.inc.online.bomber.fighter.aircraft.ww2',
  name: 'Warplane Inc. Online',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.yandex.mobile.ads.common.AdActivity',
          anyMatches: [
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] < ViewGroup <3 ViewGroup <2 ViewGroup +5 [text="Learn more"]',
            '@ImageView - ViewGroup >2 [text="AD"][visibleToUser=true]',
            '@[clickable=true] < ViewGroup - * >2 [text="AD · Mintegral"]',
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] <<3 ViewGroup - *  > * + ViewGroup >2 [text^="AD"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25241260',
            'https://i.gkd.li/i/25241244',
            'https://i.gkd.li/i/25855014',
            'https://i.gkd.li/i/25932452',
          ],
        },
        {
          key: 1,
          activityIds: 'sg.bigo.ads.api.LandscapeCompanionAdActivity',
          action: 'clickCenter', // 关闭按钮不响应无障碍事件
          matches:
            '[vid="inter_native_ad_view"] < [vid="inter_main"] + [vid="inter_btn_close"] >2 [vid="bigo_ad_btn_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25854586',
            'https://i.gkd.li/i/25854585',
          ],
          exampleUrls: [
            'https://e.gkd.li/a492aa5b-9dc7-45c6-afee-23bc2f9a4458',
            'https://e.gkd.li/4e52a61f-057e-46d8-9c37-eb20bfcaaf8b',
          ],
        },
        {
          key: 2,
          activityIds: 'com.applovin.adview.AppLovinFullscreenActivity',
          matches:
            'View[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/25241191',
        },
        {
          key: 3,
          activityIds: 'com.vungle.ads.internal.ui.VungleActivity',
          anyMatches: [
            'Image - @[text="Close button"] -n Button -2 * < [id*="ad"] <<5 [id="android:id/content"]',
            '@[text="Close button"] <2 View -2 [desc="Liftoff Privacy"] -2 * < [id*="_ad"] <<5 [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25823455',
            'https://i.gkd.li/i/25823527',
          ],
        },
      ],
    },
  ],
});
