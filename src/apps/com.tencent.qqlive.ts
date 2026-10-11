import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14049316',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ona.update.trunk.client.TrunkUpdateActivity',
          matches: '[text="暂不升级"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19666787',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: [
        '.ona.activity.SplashHomeActivity',
        '.ona.activity.VideoDetailActivity',
        '.ona.activity.origin.OriginIconHomeActivity',
        '.kmm.VideoDetailKmmActivityBk',
        '.ona.activity.HomeActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[height<74][clickable=true][visibleToUser=true] - FrameLayout >5 [vid="player_sub_title_view"]',
          exampleUrls: 'https://e.gkd.li/d0fb9740-defa-437a-882e-b3c5d6a2d231',
          snapshotUrls: 'https://i.gkd.li/i/19666783', // 顶部轮播图
        },
        {
          key: 1,
          matches:
            '[desc="the ad tag"] < @FrameLayout[clickable=true] < RelativeLayout < RelativeLayout +(1,2) * >(4,5) [text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"][text.length<6][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19667010', // 进入应用
            'https://i.gkd.li/i/19667126', // 立即下载
            'https://i.gkd.li/i/19667028', // 下载应用
            'https://i.gkd.li/i/19667404', // 了解详情
            'https://i.gkd.li/i/19667413', // 了解更多
            'https://i.gkd.li/i/19667496', // 立即试玩
            'https://i.gkd.li/i/19667620', // 查看详情
            'https://i.gkd.li/i/19667647', // 去微信看看
          ],
        },
        {
          key: 2,
          matches:
            '@ImageView[text=null][desc=null][clickable=true][width<250 && height<150] - * >(1,2) [text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"][text.length<6][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19666328', // 了解详情
            'https://i.gkd.li/i/19693394', // 立即下载
            'https://i.gkd.li/i/21139117', // 下载游戏
          ],
        },
        {
          key: 5,
          matchRoot: true,
          activityIds: '.kmm.VideoDetailKmmActivityBk', // 视频详情页
          matches:
            '[text*="广告"] -2 @View[clickable=true][getChild(0).height<90] < View[childCount>2] < * < * < * < ViewFactoryHolder <n View < View[index=parent.childCount.minus(1)] <n [childCount>6] < DetachableComposeView <2 FrameLayout <2 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/21152960',
        },
        {
          key: 7,
          matchRoot: true,
          matches:
            '@View[clickable=true][visibleToUser=true][width<174 && height<174] <(1,2,3) View[checkable=true] <<4 [name*="KMMChannelNormalFragment"] < FrameLayout <(2,3,4) ViewPager <<4 FrameLayout <(1,2) FrameLayout <(2,3,5) [id="android:id/content"]',
          snapshotUrls: [
            // 都是顶部轮播图
            'https://i.gkd.li/i/23431044',
            'https://i.gkd.li/i/24339351',
            'https://i.gkd.li/i/24588850',
            'https://i.gkd.li/i/24693451',
            'https://i.gkd.li/i/24693465',
          ],
        },
        {
          key: 8,
          matchRoot: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true][width<250 && height<150] <n RelativeLayout <<6 RecyclerView <(1,2) ViewGroup <2 FrameLayout <2 ScrollView <(2,3) [desc*="page_home_channel"] <<(6,7) FrameLayout <(2,4) [id="android:id/content"]',
          snapshotUrls: [
            // 都是顶部轮播图
            'https://i.gkd.li/i/23625987',
            'https://i.gkd.li/i/23625990',
            'https://i.gkd.li/i/24077457',
            'https://i.gkd.li/i/21139064',
          ],
          exampleUrls: 'https://e.gkd.li/18c89ee9-fcd5-43eb-805a-ac9e223e3cdc',
        },

        //无快查的放后面
        {
          key: 10,
          matches:
            '@View[clickable=true] <4 View[childCount>4] + [visibleToUser=true][text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24715171',
            'https://i.gkd.li/i/26660624',
          ],
        },
        {
          key: 11,
          matchRoot: true,
          matches:
            '@View[clickable=true][width<174][height<174] -2 TextView[text.length>5] + [childCount=1] > [text.length<7][text^="去浏览" || text^="去微信" || text^="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情"]',
          exampleUrls: 'https://e.gkd.li/1d81db1b-a722-4800-b6b7-4e5edb470984',
          snapshotUrls: [
            // 个人中心页
            'https://i.gkd.li/i/21139431', // 去浏览15秒
            'https://i.gkd.li/i/23625826', // 下载应用
            'https://i.gkd.li/i/21410460', // 去微信购买
            'https://i.gkd.li/i/21410716', // 立即领取
            'https://i.gkd.li/i/33306617', // 去微信看看
          ],
        },

        // 第二段
        {
          preKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          key: 50,
          matches: '[text="直接关闭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19667198',
            'https://i.gkd.li/i/19667244',
            'https://i.gkd.li/i/21139034',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          key: 51,
          matchRoot: true,
          matches:
            '[text="直接关闭"] < @View[clickable=true] <n View < View < View < View < ViewGroup < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24715184',
        },

        // 第三段
        {
          key: 100,
          preKeys: [50, 51],
          matches: '[text="确认"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19667102',
            'https://i.gkd.li/i/19666759',
            'https://i.gkd.li/i/21152903',
          ],
        },
        {
          key: 101,
          preKeys: [50, 51],
          matchRoot: true,
          matches:
            '[text="确认"] < @View[clickable=true] <n View < View < View < View < ViewGroup < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24715184',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '自动点击 跳过/关闭广告',
      activityIds: [
        '.ona.activity.VideoDetailActivity',
        '.kmm.VideoDetailKmmActivityBk',
      ],
      rules: [
        {
          key: 2,
          name: '全屏广告2',
          fastQuery: true,
          matches:
            '[text$="关闭广告" || text="关闭VIP热剧推荐"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13526547',
            'https://i.gkd.li/i/20691266',
            'https://i.gkd.li/i/21152927',
          ],
        },
        {
          key: 3,
          name: '居中广告-1',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][childCount=0][width<150&&height<150] - * >(3,4) [text^="摇动或点击" || text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18476380',
            'https://i.gkd.li/i/18476384',
            'https://i.gkd.li/i/19667827',
          ],
        },
        {
          key: 4,
          name: '居中广告-2',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][childCount=0] +2 [text^="摇动或点击" || text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看" || text*="小程序"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4bf0ff94-239d-4b43-900f-a375b44922e0',
          snapshotUrls: [
            'https://i.gkd.li/i/13946107',
            'https://i.gkd.li/i/14318385',
            'https://i.gkd.li/i/18476383',
            'https://i.gkd.li/i/20038310',
            'https://i.gkd.li/i/24689566',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          matches:
            '@View[clickable=true][childCount=0][width<100 && height<100] <8 View < DetachableComposeView < FrameLayout <2 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/b0f4982a-ac12-481c-bccb-f8b7a8b14c46',
          snapshotUrls: 'https://i.gkd.li/i/21175698',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.redpacket.rain.OpenRedPacketActivity',
          matches:
            '@ImageView[clickable=true] < ViewGroup[childCount=5] < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d',
          snapshotUrls: 'https://i.gkd.li/i/13842643',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '@RelativeLayout[clickable=true] + * >3 [text="立即预约"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334',
          snapshotUrls: 'https://i.gkd.li/i/14567294',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text="立即免费领取"]',
          exampleUrls: 'https://e.gkd.li/8b128ebc-ce9c-4345-8094-769f9afa8cd6',
          snapshotUrls: 'https://i.gkd.li/i/17088095',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '[text="暂不需要，稍后领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3256ed8e-752c-426d-9d64-26c9fdea9b09',
          snapshotUrls: 'https://i.gkd.li/i/17542869',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches: '[text="放弃权益"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/37d3d077-1d3b-4b4d-87c2-4e0fa00d423e',
          snapshotUrls: 'https://i.gkd.li/i/19666924',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] <2 RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/afb17212-1dcb-4d07-a9ce-b4f775ccd6fc',
          snapshotUrls: 'https://i.gkd.li/i/19666714',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'TextView[text^="暂不需要"] < @View[clickable=true] <6 View < ComposeView < FrameLayout <2 FrameLayout < FrameLayout <2 FrameLayout <2 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/4f48767f-9cfa-4507-89ab-eb24f483d05e',
          snapshotUrls: 'https://i.gkd.li/i/20148077',
        },
        {
          key: 7,
          activityIds: '.ona.activity.origin.OriginIconHomeActivity',
          matches:
            '@TextView[text="x"][clickable=true][childCount=0] + View >2 [text^="下载并领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3a524370-1dbc-4017-a357-6728f809bd9c',
          snapshotUrls: 'https://i.gkd.li/i/23763930',
        },
      ],
    },
    {
      key: 20,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '@[clickable=true] - [text*="开启通知"]',
          exampleUrls: 'https://e.gkd.li/d16d04cb-8838-455c-9bc5-acebc936637b',
          snapshotUrls: 'https://i.gkd.li/i/20368590',
        },
      ],
    },
    {
      key: 21,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '投屏页面广告',
          fastQuery: true,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches: '@[clickable=true] - [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1b7518c9-4ca7-4905-8929-6f0130abf19f',
          snapshotUrls: 'https://i.gkd.li/i/14358913',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            '.ona.activity.SplashHomeActivity',
            '.ona.activity.origin.OriginIconHomeActivity',
          ],
          matches:
            '@[name$="ImageView" || name$="FrameLayout" ][childCount<2][clickable=true][visibleToUser=true][width<250 && height<150] <3 RelativeLayout < FrameLayout <2 FrameLayout < FrameLayout <2 ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <n [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/0ea465ad-e4e4-4af5-92a4-2d71e44845f4',
          snapshotUrls: [
            'https://i.gkd.li/i/19667104',
            'https://i.gkd.li/i/21327634',
            'https://i.gkd.li/i/23121852',
            'https://i.gkd.li/i/23764004',
          ],
        },
        {
          key: 2,
          activityIds: [
            '.ona.activity.VideoDetailActivity',
            '.kmm.VideoDetailKmmActivityBk',
          ],
          matches:
            'RelativeLayout > ComposeView > View > View[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]',
          exampleUrls: 'https://e.gkd.li/23606b5d-a8e9-4848-9b5a-059e7ecb08af',
          snapshotUrls: [
            'https://i.gkd.li/i/22870972',
            'https://i.gkd.li/i/22894605',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.ona.activity.origin.OriginIconHomeActivity',
          matches: '[text="关闭广告"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/17ea1473-f4b9-4622-b6ed-60486d6208f1',
          snapshotUrls: 'https://i.gkd.li/i/23619869',
        },
      ],
    },
    {
      key: 22,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.ona.activity.SplashHomeActivity',
            '.ona.activity.VideoDetailActivity',
          ],
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] + [text^="免费看"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5f6447c1-39f6-4711-a907-fdf36f502ec6',
          snapshotUrls: [
            'https://i.gkd.li/i/17542913',
            'https://i.gkd.li/i/19667010',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches:
            '@ImageView[id=null][text=null][desc=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout[desc="float_widget_activity"] < FrameLayout <3 FrameLayout <3 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/8cac3233-7ead-4f5e-9126-51a195788276',
          snapshotUrls: 'https://i.gkd.li/i/19667028',
        },
        {
          key: 2,
          activityIds: '.ona.activity.origin.OriginIconHomeActivity',
          matches:
            '@RelativeLayout[clickable=true][childCount=2] < [desc="float_attent_banner_float_view_id"]',
          exampleUrls: 'https://e.gkd.li/ad4ea4f1-22e7-4e9b-b194-8cdddda5c069',
          snapshotUrls: 'https://i.gkd.li/i/21139028',
        },
      ],
    },
    {
      key: 23,
      name: '评价提示-视频播放界面的评价悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          fastQuery: true,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches:
            '@View[clickable=true] + RecyclerView[childCount=5] > ViewGroup[childCount=2] > TextView[text="不推荐"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b10125fa-5b1f-4a64-b258-392c57f4a1d8',
          snapshotUrls: 'https://i.gkd.li/i/20271517',
        },
        {
          key: 1,
          activityIds: '.kmm.VideoDetailKmmActivityBk',
          matches:
            '@View[clickable=true][width<80 && height<80] + [text^="我认为"]',
          snapshotUrls: 'https://i.gkd.li/i/26016085',
        },
      ],
    },
  ],
});
