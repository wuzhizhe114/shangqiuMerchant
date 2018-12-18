// pages/myComment/myComment.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: app.globalData.picHost,
    commentActive: '0',
  },
  // 切换 评论条件
  changeCommentActive(e) {
    console.log(e)
    this.setData({
      commentActive: e.currentTarget.dataset['active']
    })
  },
  imagesPreview() {
    wx.previewImage({
      current: this.data.picHost + 'demo/first_pic.png', // 当前显示图片的http链接
      urls: [
        'https://clueless.gitee.io/shangqiuimages/merchant/demo/first_pic.png',
        'https://clueless.gitee.io/shangqiuimages/merchant/demo/qiandama.png',
        'https://clueless.gitee.io/shangqiuimages/merchant/demo/second_pic.png',
      ] // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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