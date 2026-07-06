import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 2,
      name: '功能类-功能体验邀请弹窗',
      rules: [
        {
          key: 0,
          name: '[首页商城]体验邀请弹窗',
          fastQuery: true,
          activityIds:
            'com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity',
          matches: [
            'UIText[text^="立即体验"]',
            'FlattenUIText[text="不再提示"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13684791',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-朋友推荐弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="朋友推荐"] +2 [vid="close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13650523',
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      desc: '点击暂不开启',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="及时获得消息提醒"] +2 [text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/13888485',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-选择图片时自动勾选原图',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity',
          matches: '[text="原图"][desc^="未选中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13946092', //未勾选原图
            'https://i.gkd.li/i/13946033', //已勾选原图
          ],
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.ss.android.ugc.aweme.live.LiveDummyHybridTransparentActivity',
          matches:
            '@Image[clickable=true][text!=null][width<100 && height<100] +4 View >2 [text="同意协议并查看额度"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23558501',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@UIView[text="不感兴趣"][clickable=true] +2 FlattenUIText[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/24123937',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@ImageView[id=null][text=null][width<100][height<100] < ViewGroup[childCount>1] <2 LinearLayout < HorizontalScrollView < ScrollView <<7 [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25547227',
            'https://i.gkd.li/i/28449818',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-添加桌面小组件',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@ImageView[clickable=true] - [text$="桌面小组件"]',
          snapshotUrls: 'https://i.gkd.li/i/25208769',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-刷到推广视频时[上滑]',
      desc: '广告/应用/购物/游戏/咨询/预约/子薇剧场 等推广视频',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: [
            'com.ss.android.ugc.aweme.main.MainActivity',
            'com.ss.android.ugc.aweme.detail.ultra.ui.UltraDetailActivity',
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
          ],
          matches:
            '([text$="广告 展开" || text$="广告 收起"][vid="desc"][visibleToUser=true]) || ([text="应用" || text="购物" || text$="游戏" || text="咨询" || text="子薇剧场" || text="预约"][text.length<6][index=1][visibleToUser=true])',
          snapshotUrls: [
            'https://i.gkd.li/i/29214101', // [text$="广告 展开"][vid="desc"]
            'https://i.gkd.li/i/29579093', // [text$="广告 展开"][vid="desc"]
            'https://i.gkd.li/i/29686900', // [text$="广告 收起"][vid="desc"]
            'https://i.gkd.li/i/29214002', //游戏

            // 选择器参数大部分参考以下抖音快照:
            // 'https://i.gkd.li/i/21142589', //应用
            // 'https://i.gkd.li/i/21142249', //购物
            // 'https://i.gkd.li/i/25355868', //咨询
            // 'https://i.gkd.li/i/21523849', //子薇剧场
            // 'https://i.gkd.li/i/21725628', //小游戏
            // 'https://i.gkd.li/i/21765934', //预约
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/29686899', // [text*="广告"][vid="desc"] 误触
        },
      ],
    },
  ],
});
