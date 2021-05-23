//app.js
App({
  onLaunch: function() {

    // 启用小程序的云能力
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'openv',
        traceUser: true,
      })
    }

    this.initGlobalData()

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo()，不会弹框
          wx.getUserInfo({
            success: res => {
              getApp().globalData.userInfo = res.userInfo
            }
          })
        }
      }
    })
  }, // end of "onLaunch()"
  initGlobalData() {
    this.globalData = {
      name: '张飞', 
      major: '计算机科学与技术', 
      uid: '16219111131', // 全局最重要的一项数据：学号
      openid: '', 
      db: wx.cloud.database({
        env: 'openv'  // 对应名为 openv 的云环境
      })
    }
  },
  logError(text) {
    console.error('————————————运行出现了错误———————————')
    console.error(text)
    console.error('————————————————————————————————————')
  }
})