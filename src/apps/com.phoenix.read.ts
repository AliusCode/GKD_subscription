import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '功能类-自动[上滑]继续看短剧',
      desc: '①读秒结束后[上滑] ②4.5秒[上滑]1次',
      fastQuery: true,
      activityIds: [
        'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity', //A
        'com.dragon.read.component.shortvideo.impl.fullscreen.ShortSeriesLandActivity', //B 横屏
        'com.dragon.read.pages.main.MainFragmentActivity', //C
      ],
      rules: [
        {
          key: 1,
          name: '①读秒结束后[上滑]',
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
          matches: '[text="上滑继续观看短剧"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/32430183', //A
          excludeSnapshotUrls: 'https://i.gkd.li/i/32430193', //A 倒计时未结束
          exampleUrls: 'https://e.gkd.li/248c4c7b-469c-459b-a489-23c123f35766',
        },
        {
          key: 2,
          name: '②4.5秒[上滑]1次',
          actionCd: 4500,
          actionDelay: 1000, //防止自动切集的过程中误触
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
          excludeMatches: '[text="选集"][visibleToUser=true]', //显示[选集]时,停止匹配
          matches: '[text="选集"][visibleToUser=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/32429827', //A [直播间]
            'https://i.gkd.li/i/32429882', //B 倒计时未结束
            'https://i.gkd.li/i/32429877', //B
            'https://i.gkd.li/i/32429830', //C [游戏]
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/32430107', //A
          exampleUrls: [
            'https://e.gkd.li/0128820c-4e8d-44ed-9ebc-ef2d5a062e26',
            'https://e.gkd.li/b70813b8-1377-4210-be6c-fe04f3c9c701',
            'https://e.gkd.li/38c5c9d1-9962-4e07-a7de-49999d3ddf2b',
          ],
        },
      ],
    },
  ],
});
