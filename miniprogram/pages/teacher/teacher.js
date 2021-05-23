// miniprogram/pages/teacher/teacher.js
const app = getApp()

Page({
  data: {
    teachers: [{
      name: '郑向阳',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/zxy.png',
      course: ' Java程序设计',
      address: '北-5-217',
      phone: '13696719394'
    }, {
      name: '柳幼松',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/lys.png',
      course: 'XML基础教程',
      address: '北-7-702',
      phone: '13485848037'
    }, {
      name: '毕保祥',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/bbx.png',
      course: '计算机网络',
      address: '北-5-217',
      phone: '13514943057'
    }, {
      name: '杨艳',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/yy.png',
      course: '办公软件高级应用',
      address: '北-4-214',
      phone: '13505570119'
    }, {
      name: '连新泽',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/lxz.png',
      course: 'C语言程序设计',
      address: '北-5-506',
      phone: '13615576324'
    }, {
      name: '陈丽',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/cl.png',
      course: '初等数学',
      address: '北-5-217',
      phone: '13721277009'
    }, {
      name: '廖雪峰',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/lxf.png',
      course: '图形图像处理',
      address: '北-5-506',
      phone: '13721277009'
    }, {
      name: '邓文华',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/dwh.png',
      course: ' IT项目管理',
      address: '北-5-506',
      phone: '13855726216'
    }, {
      name: '郑冬松',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/zds.png',
      course: ' Oracle数据库',
      address: '北-7-702',
      phone: '13955722936'
    }, {
      name: '谢翠华',
      avator: 'https://6f70-openv-1257263957.tcb.qcloud.la/t/xch.png',
      course: '数据挖掘',
      address: '北-4-214',
      phone: '14792411273'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      teachers: []
    })

    app.globalData.db.collection('match-teacher')
      .where({
        uid: app.globalData.uid
      })
      .get()
      .then(res => {
        console.log(res)
        let data = res.data
        if (data.length !== 0) {
          let teachers = data[0].teachers // teachers 为数组形式，数组元素为各老师的名字
          app.globalData.db.collection('teacher')
            .where({
              name: app.globalData.db.command.in(teachers)
            })
            .get()
            .then(_res => {
              console.log(_res)
              let _data = _res.data
              if (_data.length !== 0) {
                this.setData({
                  teachers: _data
                })
              }
            })
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