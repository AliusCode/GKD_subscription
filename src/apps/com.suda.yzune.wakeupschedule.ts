import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suda.yzune.wakeupschedule',
  name: 'WakeUp课程表',
  groups: [
    {
      key: 1,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.suda.yzune.wakeupschedule.schedule.ScheduleActivity',
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
          activityIds:
            'com.suda.yzune.wakeupschedule.schedule.ScheduleActivity',
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
  ],
});
