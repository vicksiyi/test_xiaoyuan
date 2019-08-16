//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3487989518,4041532767&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2989181225,16043011&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3132883761,374874891&fm=26&gp=0.jpg'
    ],
    iconArray: [{
        "iconUrl": '../../images/1.png',
        "iconText": '校园友话'
      },
      {
        "iconUrl": '../../images/2.png',
        "iconText": '校园助手'
      },
      {
        "iconUrl": '../../images/3.png',
        "iconText": '趣味校园',
        "Url": "../../pages/quwei/quwei"
      },
      {
        "iconUrl": '../../images/4.png',
        "iconText": '招聘会',
        "Url": "../../pages/null/null"
      },
      {
        "iconUrl": '../../images/5.png',
        "iconText": '考研',
        "Url": "../../pages/null/null"
      },
      {
        "iconUrl": '../../images/6.png',
        "iconText": '公务员',
        "Url": "../../pages/null/null"
      },
      {
        "iconUrl": '../../images/7.png',
        "iconText": '校园服务',
        "Url": "../../pages/fuwu/fuwu"
      },
      {
        "iconUrl": '../../images/8.png',
        "iconText": '联系客服',
        "Url": "#"
      }
    ],
    shetuan: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  tel: function() {
    wx: wx.makePhoneCall({
      phoneNumber: '13336535215',
    })
  },
  tebie: function() {
    wx.navigateTo({
      url: '../../pages/tebie/tebie',
    })
  },
  youhua: function() {
    wx.switchTab({
      url: '../../pages/youhua/youhua'
    })
  },
  zhusho: function() {
    wx.switchTab({
      url: '../../pages/zhusho/zhusho'
    })
  },
  navigatorTo:function(res){
    if(res.currentTarget.dataset.id=="0"){
      wx: wx.navigateTo({
        url: '../../pages/xiaoXinxi/xiaoXinxi',
      })
    }else{
      wx: wx.navigateTo({
        url: '../../pages/null/null',
      })
    }
  },
  onLoad: function(options) {
    wx.showLoading({
      title : "数据加载中",
      mask : true
    })
    wx.cloud.init()
    const db = wx.cloud.database()
    var that = this;
    var shetuan = that.data.shetuan;
    db.collection('shetuan').get({
      success: function(res) {
        that.setData({
          shetuan : res.data[0].shetuan
        })
      }
    })
  },
  shetuan:function(res){
      console.log(res.currentTarget.dataset.id);
      wx.navigateTo({
        url: '../../pages/shetuan/shetuan?id=' + res.currentTarget.dataset.id,
      })
  },
  onReady:function(){
    wx.hideLoading({})
  }
})