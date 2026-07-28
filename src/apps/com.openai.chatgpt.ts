import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.openai.chatgpt',
  name: 'ChatGPT',
  // 根选择器模板: 'View[childCount>=3] <<(-n+18) [id="android:id/content"]'
  groups: [
    {
      key: 1,
      name: '通知提示-充值Plus提示',
      desc: '在输入框上方提示, 点击x掉',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '@[clickable=true][getChild(0).desc="关闭"] <<(-n+10)  * -> [getChild(0).text*="Plus" || text*="Plus"] <<(-n+12) View[childCount>=2][left!=0] <<(-n+12) [left=0][top!=0] <n [childCount>=3] <<(-n+18) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24996012', // 套餐限额_ 获取Plus
            'https://i.gkd.li/i/28416563', // 更专业文件?
            'https://i.gkd.li/i/28416912', // ^升级
            'https://i.gkd.li/i/28416926',
            'https://i.gkd.li/i/28435734', // 新UI_20260531
            'https://i.gkd.li/i/28840922', // `<<10`你当前正在使用免费版
          ],
          exampleUrls: 'https://e.gkd.li/db0ecc3d-9401-4c2d-bdc0-32262ce443a4',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-ban话题提前阻断屏蔽',
      desc: '再次生成-总结/结尾标志终止',
      activityIds: '.MainActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '长按',
          matches:
            '[text^="出于安全考虑"][visibleToUser=true] -  @View[clickable=true] > TextView <<(4,5,6) View[childCount>=3] <<(-n+18) [id="android:id/content"]',
          action: 'longClickCenter', // 应用不接受无障碍事件
          snapshotUrls: 'https://i.gkd.li/i/26232942',
          exampleUrls: 'https://e.gkd.li/dfe0c486-00ef-4cdd-be32-9eb2306472f5',
        },
        {
          key: 1,
          name: '编辑',
          preKeys: [0],
          position: {
            left: 'width * 0.7972',
            top: 'width * 0.5347',
          },
          matches:
            '@* ->3 [text^="出于安全考虑"][visibleToUser=true] -  View[clickable=true] > TextView <<(4,5,6) View[childCount>=3] <<(-n+18) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26233112',
          exampleUrls: 'https://e.gkd.li/f1edecab-d7f5-4f2f-8af7-daeb5ded16f7',
        },
        {
          key: 2,
          name: '发送消息',
          preKeys: [1],
          matches:
            '[desc="发送消息"][visibleToUser=true] < @View[childCount=2][clickable=true] <<4 EditText <n * < View[index=parent.childCount.minus(1)] <n View[childCount>=3] <<(-n+18) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26233149',
          exampleUrls: 'https://e.gkd.li/8f4ff7c8-d5a7-4d47-bc01-14b54d9b6b24',
        },
        {
          name: '1.“总结”中断',
          preKeys: [2],
          actionDelay: 1200,
          matches: [
            '@[text^="总结"] <n View[childCount>=12] <<4 View[childCount>=3] <<(-n+18) [id="android:id/content"]',
            '[desc="停止"][visibleToUser=true] < @View[childCount=2][clickable=true] <<2 [index=parent.childCount.minus(1)] <n EditText <n * < View[index=parent.childCount.minus(1)] <n View[childCount>=3] <<(-n+18) [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26233512',
          exampleUrls: 'https://e.gkd.li/2e88e6ee-b21d-4d26-b9dc-13fa75fc883f',
        },
        {
          name: '2.“结尾标志”中断',
          preKeys: [2],
          matches: [
            '@[text="make_Done"] <n View[childCount>=12] <<4 View[childCount>=3] <<(-n+18) [id="android:id/content"]',
            '[desc="停止"][visibleToUser=true] < @View[childCount=2][clickable=true] <<2 [index=parent.childCount.minus(1)] <n EditText <n * < View[index=parent.childCount.minus(1)] <n View[childCount>=3] <<(-n+18) [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26233630',
          exampleUrls: 'https://e.gkd.li/0eabe194-4f53-4f45-8aa3-a23a7898b2e0',
        },
        {
          key: 3,
          preKeys: [2],
          name: '自动滚动至底部',
          matches:
            '@Button - View[desc="滚动至底部"][visibleToUser=true] < @View[childCount=2][clickable=true] < [childCount=1] <n [childCount>=4] <<2 View[childCount>=3] <<(-n+18) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26233818',
          exampleUrls: 'https://e.gkd.li/9b6643fa-6791-481c-8f9f-bb24c65678af',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          activityIds: '.MainActivity',
          matchTime: 18000,
          resetMatch: 'app',
          actionMaximum: 3,
          matches:
            'Button - [desc="关闭"] < @View[clickable=true][childCount=2] - * -> [text="获取 Plus"] < [childCount=2] <<2 View <(2,3,4) View[childCount>=3] <<(-n+18) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26234095',
          exampleUrls: 'https://e.gkd.li/dd8a2887-ea64-466d-b270-de7568b55af4',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-聊天记忆容量警告',
      desc: 'x掉通知',
      fastQuery: true,
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@[clickable=true][getChild(0).desc="关闭"] - [text*="记忆容量"] <(1,2) View[childCount>2] <<(1,2) [index=parent.childCount.minus(3)] <n [childCount>5] <<(6,8) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26647576',
          exampleUrls: 'https://e.gkd.li/a53e015f-2b08-4177-80aa-b516d213b333',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动打开联网查询',
      desc: '降低Ai幻想概率⚠️只在新对话初始窗口有效',
      fastQuery: true,
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          name: '自动打开联网查询',
          matches:
            '[getChild(0).text="查找资料"] <2 @View[clickable=true] <n [childCount=3] <<(12-n) View[childCount>=3] <<(18-n) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28436159',
          exampleUrls: 'https://e.gkd.li/cb17d35d-b120-4fe5-9535-2f0991c9a8b2',
        },
        {
          preKeys: [0],
          name: '关闭建议',
          matches:
            '@[desc="关闭建议"][clickable=true] - [text="搜索一下"] <<(6-n) [index=parent.childCount.minus(1)] <n [childCount=2] <<(6-n) [index=parent.childCount.minus(1)] <n * <<(10-n) * < View[childCount>=3] <<(18-n) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28842245',
          exampleUrls: 'https://e.gkd.li/efa206f7-d18e-4968-8121-fc199dfa12c7',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-上传/发送错误自动重试',
      desc: '一般网络问题遇此情况比较多',
      fastQuery: true,
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          name: '附件重试',
          matches:
            '[desc="重试"] < @[clickable=true] < View <n View <<(6-n) * <n View <<2 View[index=parent.childCount.minus(1)] <n * <<(8-n) * < View[index=parent.childCount.minus(1)] <n View[childCount>=3] <<(18-n) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28841605',
          exampleUrls: 'https://e.gkd.li/efc0fed3-b3b0-4571-b66f-c09c8ccadefc',
        },
        {
          key: 1,
          name: '提示词重试',
          matches:
            '[desc="重试"] < @[clickable=true] - TextView[text^="你似乎已离线"] < [childCount=2] <<(6-n) [index=parent.childCount.minus(1)] <n * <<(10-n) * < View[childCount>=3] <<(18-n) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28841916',
          exampleUrls: 'https://e.gkd.li/e08da5f8-fcbc-4448-82df-4e86d457ef1c',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动保存图片',
      desc: '建议使用[分享]方式来保存',
      fastQuery: true,
      activityIds: 'com.openai.chatgpt.MainActivity',
      rules: [
        {
          key: 0,
          name: '分享页',
          matches:
            'Button - TextView[text="下载"] <2 @View[childCount=3] <(5-n) View[childCount=3] <3 View[childCount>=3] <<(18-n) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/30373387',
          exampleUrls: 'https://e.gkd.li/2a8e43ed-d457-4f60-818e-b74b2148da5d',
        },
        {
          key: 1,
          name: '图片预览页',
          actionMaximum: 1, // 防止重复点击
          matches:
            '[desc="保存"] < @View[childCount=2][clickable=true] <<3 View <3 View[childCount>=3] <<(18-n) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/30373379',
        },
      ],
    },
  ],
});
