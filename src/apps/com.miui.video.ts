import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.video',
  name: '小米视频',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '该广告的第二段需开启[智能服务]的对应规则才能关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.feature.detail.NewShortVideoDetailActivity',
            '.feature.detail.NewLongVideoDetailActivityV2',
          ],
          matches:
            '[vid="pause_ad_close_img" || vid="iv_ad" || vid="v_banner_bottom_right" || vid="ad_close" || vid="v_banner_bottomright"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/cd25f4a5-64db-4471-8eea-3d84a34ffb72',
          snapshotUrls: [
            'https://i.gkd.li/i/16044569', // iv_ad , v_banner_bottom_right
            'https://i.gkd.li/i/25323739', // pause_ad_close_img
            'https://i.gkd.li/i/25404935', // iv_ad , ad_close , v_banner_bottomright
            'https://i.gkd.li/i/25404805', // v_banner_bottomright
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.feature.main.MainTabActivity',
            '.feature.detail.NewShortVideoDetailActivity',
          ],
          matches: '[vid="ad_action_close" || vid="iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25404970',
            'https://i.gkd.li/i/30749182',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.feature.main.MainTabActivity',
          matches: '[vid="ad_logo"] +2 ImageView[vid="v_icon"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30749781',
            'https://i.gkd.li/i/30749782',
          ],
          exampleUrls: 'https://e.gkd.li/af353485-0109-4247-9e04-642492b3df16',
        },
      ],
    },
  ],
});
