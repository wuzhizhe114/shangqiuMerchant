// pages/regist/regist.js
import Notify from 'vant-weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeColor:'#fa595e',
    stepActive: '0',
    steps: [
      {
        text: '第一步',
        desc: '输入手机号'
      },
      {
        text: '第二步',
        desc: '输入验证码'
      },
      {
        text: '第三步',
        desc: '设置密码'
      }
    ]
  },
  stepGo(e){
    console.log(e)
    this.setData({
      stepActive: e.currentTarget.dataset['active']
    })
    if(e.currentTarget.dataset['active'] === '1'){
      // alert('1')
      Notify({
        text: '短信验证码已发送至177*******',
        duration: 3000,
        selector: '#custom-selector',
        backgroundColor: '#f29e2e'
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})