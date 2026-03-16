import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.googlequicksearchbox',
  name: 'Google',
  groups: [
    {
      key: 1,
      name: '全屏广告-个性化Tip',
      desc: '试用新功能举例对话(浪费Token)',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity',
          matches:
            '[text^="Gemini 现在可以根据"] <<4 [vid*="main_scroll_view"] + [vid*="_bottom_buttons_container"] > [text="关闭"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/71341a5d-d722-47a0-a6d9-5fa65d550791',
          snapshotUrls: 'https://i.gkd.li/i/25823279',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-Gemini-试用新功能',
      desc: '横幅tip-x掉',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity',
          matches:
            '[vid="assistant_server_driven_discovery_banner"] >2 @[vid*="_dimiss_button"][clickable=true][visibleToUser=true] +2 [text="立即试用"]',
          exampleUrls: 'https://e.gkd.li/fa3826c9-9c92-41a4-9060-0bc80dd72867',
          snapshotUrls: 'https://i.gkd.li/i/25823465',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-Gemini-对话连接中断重试',
      desc: 'Gemini对话连接中断自动重试',
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity',
          matches:
            '[vid="assistant_robin_main_activity"] + FrameLayout > LinearLayout[childCount=2] > [vid="snackbar_action"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3d633f7c-e3df-45dd-995f-b72b218922cd',
          snapshotUrls: 'https://i.gkd.li/i/26026659',
        },
      ],
    },
  ],
});
