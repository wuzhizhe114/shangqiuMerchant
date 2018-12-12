// pages/enterReview/enterReview.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: app.globalData.picHost,
    showStep: '1',
    showAction: false,
    actionTitle: '',
    actionsList: [],
    submitData:{
      dianpuNameId:'依据营业执照名称',
      yingyeCate: '熟食制品',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  // 上拉列表显示
  showActionList(e) {
    // console.log(e.currentTarget.id)
    let actionList = []
    if (e.currentTarget.id === "dianpuName") {
      actionList = [{
          name: '依据营业执照名称',
          type: '1'
        },
        {
          name: '333',
          type: '1'
        },
        {
          name: '444',
          type: '1'
        }
      ]
    } else {
      actionList = [{
          name: '熟食制品',
          type: '2'
        },
        {
          name: '111',
          type: '2'
        },
        {
          name: '222',
          type: '2'
        }
      ]
    }
    this.setData({
      showAction: true,
      actionTitle: e.currentTarget.dataset['actionName'],
      actionsList: actionList
    })
  },
  // 上拉列表选择
  actionSelect(e) {
    console.log(e)
    if(e.detail.type === '1'){
      this.setData({
        ['submitData.dianpuNameId']: e.detail.name,
        showAction: false
      })
    }else{
      this.setData({
        ['submitData.yingyeCate']: e.detail.name,
        showAction: false
      })
    }
  },
  // 上拉列表关闭
  closeActionSheet() {
    this.setData({
      showAction: false
    })
  },
  changeShowStep(e){
    console.log(e)
    this.setData({
      showStep: e.currentTarget.dataset['step']
    })
  },
})