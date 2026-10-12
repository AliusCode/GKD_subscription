import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suda.yzune.wakeupschedule',
  name: 'WakeUp课程表',
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
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        },
        {
          key: 1,
          matches:
            '@ImageView[visibleToUser=true][width<156 && height<156] < * < [width>1000] +2 ViewGroup >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/33348748',
        },
      ],
    },
    {
      key: 1,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: '.schedule.ScheduleActivity',
          matches: '@[vid="ib_close"][clickable=true] +n [text$="五星好评"]',
          snapshotUrls: 'https://i.gkd.li/i/24230090',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      rules: [
        {
          fastQuery: true,
          activityIds: '.schedule.ScheduleActivity',
          matches: ['[text^="新版"]', '[vid="update_close"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/24336743',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-[询问是否保存编辑]弹窗点击[离开]',
      desc: '开启后请使用右上角按钮保存',
      rules: [
        {
          fastQuery: true,
          activityIds: '.course_add.AddCourseActivity',
          matches: [
            '[text="需要保存当前的编辑吗？"]',
            '[text="离开"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25755603',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.schedule.ScheduleActivity',
          matches: '[vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25769013',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告',
      desc: '点击[关闭]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.schedule.ScheduleActivity',
          matches: '[vid="id_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/33348695',
          exampleUrls: 'https://e.gkd.li/520832d5-ec9b-4436-9095-3157d77a7979',
        },
      ],
    },
  ],
});
