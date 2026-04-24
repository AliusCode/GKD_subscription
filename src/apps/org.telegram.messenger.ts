import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger',
  name: 'Telegram',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches: '[text="打开通知"] + [text*="打开 Telegram 的通知"]',
          snapshotUrls: 'https://i.gkd.li/i/22850638',
        },
      ],
    },
    {
      key: 2,
      name: '其他-添加生日提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@ImageView[clickable=true] - * >2 [text^="添加您的生日" || text^="Add your birthday"]',
          snapshotUrls: 'https://i.gkd.li/i/22971075', // 中文
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-拍卖提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@ImageView[clickable=true][width<140 && height<140] - * >2 [text$="Auction is live!"]',
          snapshotUrls: 'https://i.gkd.li/i/23725025',
        },
      ],
    },
    {
      key: 4,
      name: '其他-首页公告栏',
      desc: '此规则覆盖生日提示、拍卖提示以及部分广告',
      rules: [
        {
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@ImageView[desc=null][clickable=true][width<140 && height<140][left>540] - LinearLayout[!(getChild(0).getChild(0).text=null)] < FrameLayout -2 FrameLayout >2 [text="Telegram"]',
          snapshotUrls: 'https://i.gkd.li/i/24560612',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25030822', // [left>540] 防止反复点击播放、暂停音乐
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通讯录权限',
      desc: '点击稍后',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@[text="Not now" || text^="稍后"] < [childCount=2] - ScrollView >2 [text*="contacts" || text*="联系人"][text.length>20]',
          snapshotUrls: [
            'https://i.gkd.li/i/26602366',
            'https://i.gkd.li/i/26609984',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-更多-保存到相册',
      desc: '右上角菜单-点击[保存到相册]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@[clickable=true][left>350] > [text="保存到相册" || text="儲存到相簿" || text="Save to Gallery"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26645432', // 保存到相册
            'https://i.gkd.li/i/27050604', // 儲存到相簿
            'https://i.gkd.li/i/26645464', // Save to Gallery
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/26645468', // [left=83]
          exampleUrls: 'https://e.gkd.li/f164341a-32fa-4054-9ae1-85d5e686bd64',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-只保存单个媒体',
      desc: '弹窗-点击 [这张图片]或[该媒体]',
      rules: [
        {
          fastQuery: true,
          matches:
            '[text^="保存" || text^="儲存" || text^="Save"] < * +2 * > [text^="这" || text^="這" || text^="This" || text^="该"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/27050091', // 这张照片
            'https://i.gkd.li/i/27050227', // 這張照片
            'https://i.gkd.li/i/26645509', // This photo
            'https://i.gkd.li/i/27049721', // 该媒体
          ],
          exampleUrls: 'https://e.gkd.li/322731e7-f595-4775-9986-a9cff001e861',
          activityIds: 'org.telegram.ui.LaunchActivity',
        },
      ],
    },
  ],
});
