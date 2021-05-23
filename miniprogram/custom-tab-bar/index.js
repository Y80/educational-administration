// miniprogram/custom-tab-bar/index.js
Page({
  data: {
    active: 0
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    switch (event.detail) {
      case 0:
        wx.switchTab({
          url: '/pages/main/main'
        });
        break;
      case 1:
        wx.switchTab({
          url: '/pages/news/news',
        });
        break;
      case 2:
        wx.switchTab({
          url: '/pages/user/user',
        });
        break;
    }
  }
})