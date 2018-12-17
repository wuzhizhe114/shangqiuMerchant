// pages/productList/productList.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: app.globalData.picHost,
    productNavActive: '0',
    productList: [
      {
        id: '11',
        picUrl: 'demo/first_pic.png',
        name: '印度苦瓜',
        price: '2.5',
        category: '蔬菜',
        chandi: '商丘蔬菜瓜果基地',
        jinhuo:'2018/11/12',
        baocun: '冷鲜'
      },
      {
        id: '22',
        picUrl: 'demo/second_pic.png',
        name: '印度苦瓜22',
        price: '2.5',
        category: '蔬菜',
        chandi: '商丘蔬菜瓜果基地',
        jinhuo:'2018/11/12',
        baocun: '冷鲜'
      },
    ],
    checkResult: [],
    checkedAll: false,
  },
  changeNavActive(e){
    this.setData({
      productNavActive: e.currentTarget.dataset['active']
    })
  },
  onCheckboxChange(event) {
    // console.log(event)
    let tempAll = false;

    if(event.detail.length === this.data.productList.length){
      tempAll = true
    }
    this.setData({
      checkResult: event.detail,
      checkedAll: tempAll
    });
  },
  changeCheckedAll(e){
    // console.log(e)
    let tempResult = []
    if(e.detail){
      this.data.productList.forEach(function(item,index){
        // console.log(item)
        tempResult.push(item.id)
      })
    }
    this.setData({
      checkedAll: e.detail,
      checkResult: tempResult
    });
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