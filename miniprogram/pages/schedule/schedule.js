// miniprogram/pages/schedule/schedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const db = wx.cloud.database({
      env: 'openv'
    });
    db.collection('schedule').limit(1).get()
      .then((rst) => {
        let content = rst.data[0].content;
        this.setData({
          items: [{
            day: 'Mon',
            course: content.Mon.course
          }, {
            day: 'Tue',
            course: content.Tue.course
          }, {
            day: 'Wed',
            course: content.Wed.course
          }, {
            day: 'Thu',
            course: content.Thu.course
          }, {
            day: 'Fri',
            course: content.Fri.course
          }]
        })
      });
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