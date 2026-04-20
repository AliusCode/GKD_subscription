import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yjhb.android.feibang',
  name: '赏帮赚',
  groups: [
    {
      key: 1,
      name: '功能类-取消报名直接确认',
      desc: '跳过二次确认',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zx.core.code.activity.MyTaskActivity',
          matches:
            '[text="确定取消报名？"] < LinearLayout + [childCount=2] >2 [text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/26903991',
          exampleUrls: 'https://e.gkd.li/eebf7a06-0263-4d0d-961f-eae45a328f08',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-上传自动选择截图',
      desc: '选中第一个并点击完成',
      fastQuery: true,
      actionMaximum: 1, // 第二次可自选
      resetMatch: 'match', // 做完一个选完截图再切app干下一步,正合此意
      activityIds: 'com.luck.picture.lib.PictureSelectorActivity',
      rules: [
        {
          key: 0,
          name: '选中第一个图片',
          matches: [
            '[text="请选择"]',
            '@LinearLayout[index=1] <2 [index=0] < [index=1] - [childCount=2] >2 [text="相机胶卷"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26904379',
          exampleUrls: 'https://e.gkd.li/a9c0a7d1-2ffd-4718-8277-91c68919f96d',
        },
        {
          preKeys: [0],
          name: '点击已完成',
          matches: '[text="1"] + [text="已完成"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26904647',
          exampleUrls: 'https://e.gkd.li/866bc10a-b62b-4948-ad56-6206b2349054',
        },
      ],
    },
  ],
});
