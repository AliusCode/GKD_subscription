import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '功能类-自动[上滑]继续看短剧',
      desc: '①读秒结束后[上滑] ②4.5秒[上滑]1次',
      rules: [
        {
          key: 1,
          name: '①读秒结束后[上滑]',
          fastQuery: true,
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.7',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: '[text="上滑继续观看短剧"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29092674',
          excludeSnapshotUrls: 'https://i.gkd.li/i/29092652', //倒计时未结束
          exampleUrls: 'https://e.gkd.li/36e57d51-d134-4507-9aca-ada9e71b9b14',
        },
        {
          key: 2,
          name: '②4.5秒[上滑]1次',
          actionCd: 4500,
          // forcedTime: 60000,
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.7',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200,
          },
          activityIds:
            'com.dragon.read.component.shortvideo.impl.fullscreen.ShortSeriesLandActivity', //横屏
          matches: '[visibleToUser=true][desc="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/29092652', //倒计时未结束
        },
      ],
    },
  ],
});
