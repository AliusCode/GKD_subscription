import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jk.fitness',
  name: '食卡卡',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '子key2会点击假的[跳过]按钮进入广告,需配合下一条规则使用', // issues #204
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        },
        {
          key: 1,
          matches:
            '@ImageView < [width<137 && height<137] < [visibleToUser=true] +n ViewGroup >2 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28437892',
            'https://i.gkd.li/i/28447272',
          ],
        },
        {
          key: 2,
          matches:
            'TextView - @View[id=null][text=null][desc=null][clickable=true][width<148 && height<148] <3 FrameLayout[childCount=4] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28448877', // 假的[跳过]按钮,点击了会进入广告  (issues #204)
        },
      ],
    },
    {
      key: 2,
      name: '其他-开屏误触后的返回操作',
      desc: '配合开屏广告规则使用',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      scopeKeys: [1], // 关联 开屏广告规则
      activityIds: '.MainActivity',
      rules: [
        {
          key: 21,
          preKeys: [2], // 开屏广告规则 子key2
          matches:
            '@Button[desc="返回"] < View < View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/29038524',
        },
        {
          key: 22,
          preKeys: [2],
          matches:
            '[desc*="会员"] -n @ImageView[clickable=true][width<157] <3 View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/31331586',
        },
        {
          key: 23,
          matches:
            '@ImageView[clickable=true] <2 View < View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/29038568',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-获取设备',
      desc: '获取AI体脂秤-> 暂不',
      matchTime: 14000, // 应该是开屏广告后紧接着出现的
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jk.fitness.MainActivity',
          matches:
            '@View[desc="暂不"][clickable=true][visibleToUser=true] -2 ImageView < View[childCount=3][left=0 && top=0] <<(6-n) FrameLayout <<(4-n) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/30460157',
          exampleUrls: 'https://e.gkd.li/82711399-cc15-4cab-acc2-f6d359b9d349',
        },
      ],
    },
  ],
});
