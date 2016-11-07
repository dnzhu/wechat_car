//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'this is a demo test!',
    userInfo: {}
  },
  

  //获取用户信息
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})