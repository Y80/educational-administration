import Dialog from '../../dist/dialog/dialog';

const app = getApp();

Page({
  data: {
    uid: '',
    psw: '',
    field2: {
      type: 'password',
      rightIcon: 'closed-eye',
      isFocus: false
    },
    btn1: {
      isLoading: false
    }
  },

  onClickIcon: function() {
    if (this.data.field2.type == 'password') {
      this.setData({
        field2: {
          type: 'text',
          rightIcon: 'eye-o',
          isFocus: true
        }
      })
    } else {
      this.setData({
        field2: {
          type: 'password',
          rightIcon: 'closed-eye',
          isFocus: true
        }
      })
    }
  },

  blur1: function(event) {
    this.setData({
      uid: event.detail.value
    })
  },
  blur2: function(event) {
    this.setData({
      psw: event.detail.value
    })
  },

  btn1: function() {
    let _ = this
    _.setData({
      btn1: {
        // 弹出登录动画
        isLoading: true
      }
    })
    wx.cloud.callFunction({
        name: 'login',
        data: {
          // 向云函数传入用户输入的学号、密码
          trigger: 'loginByPsw',
          uid: this.data.uid,
          password: this.data.psw
        }
      })
      .then(res => {
        // console.log(res);
        let data = res.result;
        if (data.length === 0) {
          // 登陆失败
          Dialog.alert({
            title: '登录失败',
            message: '账户或密码输入有误'
          });
          _.setData({
            btn1: {
              isLoading: false
            }
          });
        } else {
          // 登录成功，存储数据并跳转至首页
          app.globalData.name = data[0].name;
          app.globalData.uid = data[0].uid;
          app.globalData.password = data[0].password;
          app.globalData.major = data[0].major;
          app.globalData.openid = data[0].openid;
          wx.switchTab({
            url: '/pages/main/main'
          });
        }
      })
  },

  btn2: function() {
    if (!app.globalData.password) {
      Dialog.alert({
        title: '登录失败',
        message: '当前微信还未绑定教务系统账户\n请输入账户、密码登录后进行绑定'
      })
    } else {
      wx.switchTab({
        url: '/pages/main/main'
      });
    }
  },

  onLoad: function(options) {
    // 调用名为 login 的云端函数
    wx.cloud.callFunction({
        name: 'login',
        data: {
          trigger: 'onLoad'
        }
      })
      .then(res => {
        let data = res.result;
        if (data.length !== 0) {
          // 将接收到的数据赋值到全局变量中
          app.globalData.name = data[0].name;
          app.globalData.uid = data[0].uid;
          app.globalData.password = data[0].password;
          app.globalData.major = data[0].major;
          app.globalData.openid = data[0].openid;
        }
      })
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

  }
})