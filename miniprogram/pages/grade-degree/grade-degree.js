// miniprogram/pages/grade-degree/grade-degree.js
const app = getApp();

Page({
  data: {
    activeNames: null,
    items: null
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  onLoad: function (options) {
    const gData = app.globalData;
    gData.db.collection('grade-degree').where({
        uid: gData.uid
      }).get()
      .then(rst => {
        this.setData({
          items: rst.data[0].content
        })
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