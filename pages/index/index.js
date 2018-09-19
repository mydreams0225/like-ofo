//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    latitude:"0",
    longitude:"0"
  },
  //页面加载
 onLoad:function(){
   //方法一
   var _this=this
   console.log('onload');
  //  微信提供的方法
   wx.getLocation({
     //方法二箭头函数表示执行当前作用域
     success: (res)=> {
      console.log(res);
      this.setData({
        longitude:res.longitude,
        latitude:res.latitude
      })
      console.log(this)
     },
   })
   wx.getSystemInfo({
     success: (res)=>{
       console.log(res);
       this.setData({
         controls
       })
     },

   })

 },
 //生命周期函数--监听页面初次渲染完成
 onReady:function(){
   console.log('onread')
 },
 //生命周期函数--监听页面显示
 onShow:function(){
   console.log('onshow')
 },
 //切后台
 onHide:function(){
   console.log('onhide')
 },
 onUnload:function(){
   console.log('onunload')
 },


   
})
