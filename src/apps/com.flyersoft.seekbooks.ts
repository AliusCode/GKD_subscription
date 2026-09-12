import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flyersoft.seekbooks',
  name: '搜书大师',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/32143574',
        },
        {
          key: 1,
          matches:
            '@ImageView[width<147 && height<147] < [visibleToUser=true] < [childCount=1] +3 ViewGroup >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/32141142',
        },
        {
          key: 2,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"]',
          snapshotUrls: 'https://i.gkd.li/i/32140212',
        },
      ],
    },
  ],
});
