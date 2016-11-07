//获取新闻
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    navTab: ["最新", "亿人", "视频", "新闻","导购"],
    currentNavtab: "0",
    imgUrls: [
      '../../imgs/gift1.png',
      '../../imgs/gift2.png',
      '../../imgs/gift3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    article: [],
    article_length: 0
  },
  //事件处理函数
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现首页刷新
  refresh0: function(){
    var index_api = '';
    util.getData(index_api)
        .then(function(data){
          //this.setData({
          //
          //});
          console.log(data);
        });
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    var article = util.getData2();
    console.log("loaddata");
    var article_data = article.data;
    this.setData({
      article:article_data,
      article_length: article_data.length
    });
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    var next = util.getNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      article: this.data.article.concat(next_data),
      article_length: this.data.feed_length + next_data.length
    });
  }


})


