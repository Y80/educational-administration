// miniprogram/pages/select-course/select-course.js
import Dialog from '../../dist/dialog/dialog';

const app = getApp()

Page({
  data: {
    checkedItems: [],
    btnCommit: {
      isLoading: false,
      text: '提交',
      disabled: false
    }
  },

  onChange(event) {
    this.setData({
      checkedItems: event.detail
    });
  },

  submit(event) {
    if (this.data.checkedItems.length === 0) {
      Dialog.alert({
        message: '请先选择课程'
      });
      return;
    }

    this.setData({
      ['btnCommit.isLoading']: true // 部分更新 this.data 中的数据
    });
    wx.cloud.callFunction({
        name: 'select-course',
        data: {
          course: this.data.checkedItems[0],
          uid: app.globalData.uid
        }
      })
      .then(res => {
        if (res.result === true) {
          Dialog.alert({
              message: "您已报名：" + this.data.checkedItems.join('、')
            })
            .then(() => {
              wx.navigateBack({
                delta: 1
              })
            })
        }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取选修课数据，按余量降序排序
    app.globalData.db.collection('elective-course')
      .orderBy('remains', 'desc')
      .get()
      .then(res => {
        console.log(res)
        let data = res.data
        if (data.length === 0) {
          throw new Error('从数据库 elevtive-course 获取数据为空')
        }
        this.setData({
          course: data
        })
      })
      .catch(err => {
        app.logError(err.message)
      })
    // 检查用户是否已经报过名
    app.globalData.db.collection('select-course-stats')
      .where({
        uid: app.globalData.uid
      })
      .get()
      .then(res => {
        console.log(res)
        let data = res.data
        if (data.length !== 0) {
          this.setData({
            btnCommit: {
              disabled: true,
              text: '您已报名' + data[0].course
            }
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})