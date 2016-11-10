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
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  
  switchTab: function(e){
    //获取数据
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  refresh: function(){
    var article = util.getData2();
    console.log("loaddata");
    var article_data = article.data;
    this.setData({
      article:article_data,
      article_length: article_data.length
    });
  }



})


