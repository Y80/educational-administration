// miniprogram/pages/main/main.js
const app = getApp()
Page({
  data: {
    noticeText: "",
    cards: [{
      icon: 'column',
      text: '课表查询',
      url: '/pages/schedule/schedule',
      style: 'background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);'
    }, {
      icon: 'award',
      text: '学期成绩',
      url: '/pages/grade-semester/grade-semester',
      style: 'background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);'
    }, {
      icon: 'medal',
      text: '等级考试成绩',
      url: '/pages/grade-degree/grade-degree',
      style: 'background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);'
    }, {
      icon: 'friends',
      text: '任课教师',
      url: '/pages/teacher/teacher',
      style: 'background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);'
    }, {
      icon: 'bars',
      text: '在线选课',
      url: '/pages/select-course/select-course',
      style: 'background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);'
    }, {
      icon: 'photo',
      text: '校园印象',
      url: '/pages/gallery/gallery',
      style: 'background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);'
    }]
  },
  getLastNotice() {
    app.globalData.db.collection('notice')
      .field({
        text: true
      }).orderBy('create_date', 'desc')
      .limit(1)
      .get()
      .then(res => {
        let data = res.data
        if (data.length !== 0) {
          this.setData({
            noticeText: data[0].text
          })
        } else {
          app.logError('未从数据库 notice 中获取到有效数据')
        }
      })
      .catch(err => {
        app.logError(err.message)
      })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTabBar().setData({
      active: 0
    })
    this.getLastNotice()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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