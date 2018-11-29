// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: 'https://clueless.gitee.io/shangqiuimages/merchant/',
    otherLogin: false,
    loginStepOn: '0',
  },
  otherLoginClose(){
    this.setData({
      otherLogin: false
    })
  },
  showOtherLogin(){
    this.setData({
      otherLogin: true
    })
  },
  // 登录方式步骤
  changeStepOn(e){
    let step = e.currentTarget.dataset['step']
    if (step === "2" || step === "0"){
      this.otherLoginClose();
    }
    // console.log(e)
    this.setData({
      loginStepOn: step
    })
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