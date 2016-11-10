//获取新闻
var app = getApp()
Page({
  data: {
    art_id: ''
  },
  onLoad: function (options) {
    console.log(options)
    var that = this
    //调用应用实例的方法获取全局数据
    that.setData({
        art_id:options.id
      })
  }
})


