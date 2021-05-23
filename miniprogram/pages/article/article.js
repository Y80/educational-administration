// miniprogram/pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
        name: 'h3',
        attrs: {
          style: 'margin-bottom: 20px;color:#222;font-weight:600;'
        },
        children: [{
          type: 'text',
          text: '学院召开第二次疫情防控工作专题部署会'
        }]
      }, {
        name: 'p',
        attrs: {
          class: 'article-p'
        },
        children: [{
          type: 'text',
          text: '2月1日下午，学院在行政楼229会议室召开第二次疫情防控工作专题部署会，再次专题研究我院新型冠状病毒感染的肺炎疫情防控工作。会议由院长蔡贻象主持，党委书记王定福、副院长诸常初、李博、杨雄及相关疫情防控工作领导小组成员出席会议。'
        }]
      }, {
        name: 'img',
        attrs: {
          src: 'https://www.ojc.zj.cn/UploadFile/202002/202002031711577805_sy.png',
          class: 'article-img'
        }
      },
      {
        name: 'p',
        attrs: {
          class: 'article-p'
        },
        children: [{
          type: 'text',
          text: '会上，蔡贻象、王定福先后传达了《浙江省教育厅办公室关于做好大中小学（幼儿园）2020年春季学期延期开学相关工作的通知》《温州市关于坚决打赢疫情防控阻击战的紧急措施》（简称25条）和谢树华书记在温州大学疫情防控工作再动员再部署视频会议上的讲话精神，对学院的疫情防控工作现状进行了分析，并对下阶段防控重点工作进行了部署。诸常初和各专项工作组对学院肺炎疫情防控整体工作情况和专项工作组工作进展情况进行了汇报。'
        }]
      },
      {
        name: 'p',
        attrs: {
          class: 'article-p'
        },
        children: [{
          type: 'text',
          text: '会议强调，为打赢学院阻击疫情攻坚战，要进一步做好疫情防控工作的宣传引导和信息传递工作，积极发挥和强化各二级学院和部门的主体责任。会议要求，学院领导、各二级学院和部门负责人、各专项工作组、全体师生和各级党组织以及全体党员干部要进一步统筹指挥、严防严控，狠抓各项落实工作，以更快的行动、更高的标准、更严的举措，健全长效工作机制，构筑起全方位立体化的疫情防控网络。会议还对新学期开学时间、师生返校要求、教学安排、疫情数据报送、“有症状”师生防控、校园安全保障等工作作了安排和部署。'
        }]
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const id = options.id;
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