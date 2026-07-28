import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gm',
  name: 'Gmail',
  groups: [
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '右滑删除⚠️该规则需v1.12.0及以上版本可使用',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches:
            '@[childCount=7][vid$="ad_teaser_item"] >2 [vid="ad_badge_text"]',
          action: 'swipe',
          swipeArg: {
            start: {
              left: 'width * 0.15',
              top: 'width * 0.08',
            },
            end: {
              left: 'width * 0.64',
              top: 'width * 0.08',
            },
            duration: 114,
          },
          snapshotUrls: [
            'https://i.gkd.li/i/13255698', // 旧快照 节点还未引进 vid 属性
            'https://i.gkd.li/i/25542293',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页卡片',
      desc: '邮件页顶部[试用Google Woekspace]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.google.android.gm.ui.MailActivityGmail',
          matches:
            'Button - View[desc=""] < @View[childCount=2][clickable=true][width=102 && height=102][visibleToUser=true] - TextView <n View[childCount>5 && childCount<10] <<3 ComposeView - LinearLayout <<2 [vid="thread_list_view"]',
          snapshotUrls: 'https://i.gkd.li/i/30378474',
          exampleUrls: 'https://e.gkd.li/357dc3c9-cf98-40b3-a01d-35bb8219dae8',
        },
      ],
    },
  ],
});
