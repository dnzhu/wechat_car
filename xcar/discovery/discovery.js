//discovery.js
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["发现", "找论坛", "", "",""],
    currentNavtab: "0",
    
    feed: [],
    feed_length: 0
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    //this.refresh();
  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }

});
