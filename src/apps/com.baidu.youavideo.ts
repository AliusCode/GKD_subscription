import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeMatches: '[text="开启安全备份"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23549481',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23567868',
          exampleUrls: 'https://e.gkd.li/5185bf9d-70f7-4841-991e-55b1b6768e97',
        },
        {
          key: 1,
          // excludeActivityIds: 'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          matches:
            '@[text*="跳过"] + [visibleToUser=true] >(1,3) [text*="摇一摇" || text*="摇动" || text*="点击"]',
          snapshotUrls: 'https://i.gkd.li/i/23549490',
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23549097', // 用 [visibleToUser=true][text*="跳过"] 会误触
        },
        {
          key: 2,
          matches: '[vid="flash_fragment"] >n [vid="ms_skipView"]',
          snapshotUrls: 'https://i.gkd.li/i/30690903',
        },
        {
          key: 3,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23549504',
            'https://i.gkd.li/i/23549553',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示-软件升级提醒',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: '.home.view.HomeActivity',
          matches: '[vid="tv_upgrade"] < LinearLayout +2 [vid="img_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12597916'],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮窗广告',
      desc: '关闭广告悬浮窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.view.HomeActivity',
          matches: '[vid="img_operation_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12970088',
        },
      ],
    },
    {
      key: 4,
      name: '评价提示',
      desc: '点击下次再说',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: '.home.view.HomeActivity',
          matches: '[vid="tv_next_time"]',
          snapshotUrls: 'https://i.gkd.li/i/12970094',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.vip.ui.VipPayWebDialogActivity',
          matches:
            '[text^="恭喜获得会员"] - View[text=""] > @Image[text!=null][visibleToUser=true] <<n [vid="fl_web_view"]',
          exampleUrls: 'https://e.gkd.li/c149b068-7f00-4173-9000-a41fa1603ba7',
          snapshotUrls: 'https://i.gkd.li/i/17576805',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            '.preview.ui.search.SearchPreviewActivity',
            '.preview.ui.hometimeline.TimelinePreviewActivity',
            '.preview.ui.album.AlbumPreviewActivity',
          ],
          matches: '[vid="fl_ad"] - [vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6b628b65-214f-4dc0-b0b8-805ea566464b',
          snapshotUrls: [
            'https://i.gkd.li/i/14133595',
            'https://i.gkd.li/i/14217352',
            'https://i.gkd.li/i/17580816',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/15750684',
        },
        {
          key: 2,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.home.view.HomeActivity',
          matches: '[vid="dialog_home_pop_close_button"]',
          exampleUrls: 'https://e.gkd.li/c83b5006-1b0d-478e-ab0a-d2f3f4957162',
          snapshotUrls: 'https://i.gkd.li/i/17732139',
        },
      ],
    },
    {
      key: 7,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.ui.HomeActivity',
          matches:
            '[vid="dialog_open_guide_notification_root"] > [vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13413819',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-照片页底部浮窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.view.HomeActivity',
          matches: '[vid="cl_root"] + [vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13711475',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          matches: '[vid="riv_banner"] + [vid="iv_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13874124',
            'https://i.gkd.li/i/15220559', // 避免误触
          ],
        },
      ],
    },
  ],
});
