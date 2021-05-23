// miniprogram/pages/news/news.js
const app = getApp()

Page({
  data: {
    items: []
  },

  // 将 从数据库获取的数据转化为 便于渲染的格式
  formatNews(data) {
    let _items = []
    for (let i = 0; i < data.length; ++i) {
      let date = data[i].create_date
      let item = {
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        navigateInfo: []
      }
      //获取与 date 相同的数据
      for (let j = i; j < data.length; ++j, ++i) {
        item.navigateInfo.push({
          title: data[i].title,
          url: data[i].url
        })
        if (j !== data.length - 1) {
          let nextDate = data[j + 1].create_date
          nextDate = `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`
          if (nextDate !== item.date) { // 当前数据与下一条数据日期不同，那么当天所有数据已获取，则放到 _items
            _items.push(item)
            break;
          }
        } else {
          _items.push(item)
        }
      }
    } // end for
    this.setData({
      items: _items
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTabBar().setData({
      active: 1
    })

    app.globalData.db.collection('news')
      .orderBy('create_date', 'desc')
      .get()
      .then(res => {
        let data = res.data
        if (data.length !== 0) {
          this.formatNews(data)
        } else {
          app.logError('未从数据库 news 中获取到数据')
        }
      })
      .catch(err => {
        app.logError(err.message)
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