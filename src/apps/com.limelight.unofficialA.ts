import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.limelight.unofficialA',
  name: '月光·阿西西',
  groups: [
    {
      key: 1,
      name: '功能类-自动恢复串流',
      desc: '上次连接图标->恢复串流 直接进入画面',
      fastQuery: true,
      activityIds: 'com.limelight.AppView',
      matchTime: 8000,
      actionMaximum: 1,
      resetMatch: 'app', //防止退出串流后又进去
      rules: [
        {
          key: 0,
          name: '上次连接图标',
          matches:
            'GridView[vid="fragmentView"] @[clickable=true] > [childCount=2] > [vid="grid_overlay"]',
          snapshotUrls: 'https://i.gkd.li/i/32876938',
          exampleUrls: 'https://e.gkd.li/05212f5a-1cbc-4184-9752-06a40573483a',
        },
        {
          preKeys: [0],
          name: '恢复串流',
          matches: '[text="恢复串流"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/32877047',
          exampleUrls: 'https://e.gkd.li/b5152b35-a80b-4c8d-a466-278132e93086',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-串流自动选择默认卡片',
      desc: '选择Disktop卡片连接',
      rules: [
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.limelight.AppView',
          matches:
            'GridView[vid="fragmentView"] @[clickable=true][index=0] > * > [vid="grid_image"]',
          snapshotUrls: 'https://i.gkd.li/i/32877372',
          exampleUrls: 'https://e.gkd.li/a03b46ea-df92-40dd-b30c-b3887f390db4',
        },
      ],
    },
  ],
});
