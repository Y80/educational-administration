// miniprogram/pages/user/user.js
import Dialog from '../../dist/dialog/dialog';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    major: '',
    addBindWechatText: '',
    bindWechatClick: 'bindWechat',

    showCalender: false,
    calenderSrc: 'https://6f70-openv-1257263957.tcb.qcloud.la/calender.jpg',
    showPswEditor: false,
    lastPsw: '',
    newPsw: '',
    pswCommitLoading: false
  },

  onClickShowCalender() {
    this.setData({
      showCalender: true
    })
  },
  onClickHideCalender() {
    this.setData({
      showCalender: false
    })
  },
  onClickShowPswEditor() {
    this.setData({
      showPswEditor: true
    })
  },
  onClickHidePswEditor() {
    this.setData({
      showPswEditor: false
    })
  },
  onBlurLastPsw(event) {
    this.setData({
      lastPsw: event.detail.value
    })
  },
  onBlurNewPsw(event) {
    this.setData({
      newPsw: event.detail.value
    })
  },

  onClickPswCommit() {
    if (this.data.lastPsw != app.globalData.password) {
      wx.showToast({
        title: '旧密码验证错误',
        icon: 'none'
      });
      return;
    };

    if (this.pswVerify(this.data.newPsw) === false) {
      wx.showToast({
        title: '密码需至少包含 6 个字符',
        icon: 'none'
      });
      return;
    };
    this.setData({
      pswCommitLoading: true
    });

    wx.cloud.callFunction({
      name: 'update-psw',
      data: {
        uid: app.globalData.uid,
        password: this.data.newPsw
      }
    }).then(res => {
      console.log(res)
      if (res.result.stats.updated === 1) {
        this.goLogin()
      }

      this.setData({
        pswCommitLoading: false
      })
      this.onClickHidePswEditor()
    })
  },

  /**
   * 校验密码的合法性
   */
  pswVerify(psw) {
    if (typeof(psw) !== 'string') return false;
    if (psw.length < 6) return false;
    return true;
  },


  /**
   * 这是一个空的方法，用于 catchtap="nullFunc"，可以阻止点击事件冒泡；区别于 bindtap='func'
   */
  nullFunc() {},

  bindWechat() {
    Dialog.confirm({
      title: '提示',
      message: "绑定微信后，您可以通过微信登录本小程序\n是否继续绑定？",
      zIndex: 10000,
      asyncClose: true
    }).then(() => {
      // 调用云函数进行绑定
      wx.cloud.callFunction({
        name: 'bind-wechat',
        data: {
          uid: app.globalData.uid
        }
      }).then(res => {
        console.log(res)

        if (res.result.stats.updated === 1) {
          this.setData({
            addBindWechatText: '(已绑定)',
            bindWechatClick: ''
          })
        }
        Dialog.close();
      })
    }).catch(() => {
      Dialog.close();
    });
  },
  goLogin() {
    app.initGlobalData()
    wx.reLaunch({
      url: '/pages/login/login'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTabBar().setData({
      active: 2
    })

    let gData = app.globalData;
    this.setData({
      name: gData.name,
      major: gData.major
    });
    if (gData.openid.length !== 0) {
      this.setData({
        addBindWechatText: '（已绑定）',
        bindWechatClick: ''
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})