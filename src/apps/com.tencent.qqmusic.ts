import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bde5c1a5-3259-45d3-a6b8-8482f7818c6f',
          snapshotUrls: 'https://i.gkd.li/i/17056504',
        },
        {
          key: 1,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6537da92-f5f6-4ee8-9219-5f39f7c5e8a2',
          snapshotUrls: 'https://i.gkd.li/i/17068758',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      activityIds: '.activity.AppStarterActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches:
            '[text^="广告"] + [text="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13985169', // 播放界面
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@[desc="关闭"][clickable=true] -(1,2) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534', //歌单页
            'https://i.gkd.li/i/13797001', //我的页
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matches:
            '@ImageView - ImageView - RelativeLayout >3 [text="听歌入会赢绿钻" || text="摇动点击广告跳转"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982', // (首页) 听歌入会赢绿钻
            'https://i.gkd.li/i/13218134', // (首页) 摇动点击广告跳转
          ],
        },
        {
          key: 4,
          fastQuery: true,
          matches: '@[clickable=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15041019', // 首页
            'https://i.gkd.li/i/18227243', // 搜索页
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18219557', // [text="广告"][visibleToUser=false]
        },
        {
          key: 5,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][height<87] <2 RelativeLayout - * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/26806364', // 首页
        },
        {
          key: 6,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true] - [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17450309',
        },
        {
          key: 7,
          fastQuery: true,
          matches: '[text="广告 | 关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18227204',
        },

        // 不支持快查的放后面,以防阻塞前面快查的
        {
          key: 20,
          matchTime: 10000,
          matches:
            'RecyclerView > FrameLayout[desc!=null] >3 LinearLayout[id!=null] > ViewPager > FrameLayout[visibleToUser=true] > ImageView[childCount=0][clickable=true][width<150 && height<100][index=parent.childCount.minus(1)]',
          exampleUrls: 'https://e.gkd.li/c7b25408-26ed-4010-8506-88f614dccd26',
          snapshotUrls: [
            'https://i.gkd.li/i/23623581',
            'https://i.gkd.li/i/23623677',
          ],
        },
        {
          key: 21,
          matches:
            'ImageView[width<80 && height<80] <<2 @ViewGroup[clickable=true] - [text^="hi~"]',
          snapshotUrls: 'https://i.gkd.li/i/23930716',
        },
        {
          key: 22,
          matches:
            'RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15756931',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.activity.TranslucentWebViewActivity',
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
            'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          ],
          matches:
            '@[desc^="关闭"][desc.length<10][visibleToUser=true][width>50 && width<177] <<(25-n) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121', //关闭
            'https://i.gkd.li/i/14549936',
            'https://i.gkd.li/i/14798904',
            'https://i.gkd.li/i/15209764', // <<n , n=20
            'https://i.gkd.li/i/15261116',
            'https://i.gkd.li/i/17459008',
            'https://i.gkd.li/i/23930628', // [clickable=false]
            'https://i.gkd.li/i/23930853', // [clickable=false]
            'https://i.gkd.li/i/17057551', //关闭弹窗
            'https://i.gkd.li/i/23495699', //关闭弹窗，按钮
            'https://i.gkd.li/i/13806773', //关闭按钮
          ],
          exampleUrls: 'https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722',
        },
        {
          key: 2,
          activityIds: [
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
          ],
          matches:
            '@ImageView[childCount=0][visibleToUser=true][width<130 && height<130] <<(7,8,9) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18439138',
            'https://i.gkd.li/i/22924866',
            'https://i.gkd.li/i/20745872',
            'https://i.gkd.li/i/22699223',
            'https://i.gkd.li/i/30530361',
          ],
          exampleUrls: 'https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4',
        },
        {
          key: 4,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/f1c596e5-36b6-485b-aa55-a235d57bddf9',
          snapshotUrls: 'https://i.gkd.li/i/22699207',
        },
        {
          key: 6,
          name: '免流弹窗',
          activityIds: [
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
          ],
          matches: '[text="流量够用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197868',
            'https://i.gkd.li/i/15285647',
          ],
        },
        {
          key: 8,
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 9,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches: '[visibleToUser=true][desc$="不再提示"]',
          exampleUrls: 'https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9',
          snapshotUrls: 'https://i.gkd.li/i/18428240',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-内测体验弹窗',
      desc: '点击[不再提醒]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.AppStarterActivity',
          matches: '[text="抢先体验"] -2 [text="不再提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/13178485',
        },
      ],
    },
    {
      key: 8,
      name: '评价提示-好评弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.AppStarterActivity',
          matches: '@[vid="close_btn"] - * > [text*="好评"]',
          snapshotUrls: 'https://i.gkd.li/i/14881903',
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-评论区广告',
      desc: '点击右下角展开-点击[不感兴趣]',
      activityIds: '.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
          snapshotUrls: 'https://i.gkd.li/i/15010210',
        },
        {
          preKeys: [0],
          key: 99,
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
    {
      key: 11,
      name: '其他-播放页[猜你也会喜欢]推荐',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches:
            '@ImageView[childCount=0][clickable=true] -2 [text="猜你也会喜欢"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/40846baf-4638-4740-970a-30924cbd9414',
          snapshotUrls: 'https://i.gkd.li/i/18410610',
        },
      ],
    },
  ],
});
