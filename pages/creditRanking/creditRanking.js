// pages/creditRanking/creditRanking.js
import * as echarts from '../../component/ec-canvas/echarts.min.js';
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: app.globalData.picHost,
    showPopup: false,
    ec: {
      lazyLoad: true // 延迟加载
    },
  },
  showQushiPopup() {
    this.setData({
      showPopup: true,
    });
    this.init_echarts(); //初始化图表    
  },
  qushiPopupClose() {
    this.setData({
      showPopup: false,
    });
  },

  init_echarts: function() {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      Chart.setOption({
        //x轴信息样式
        xAxis: {
          data: ['7月', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6月'],
          axisLine: { //坐标轴颜色
            lineStyle: {
              color: '#ccc',
            },
          },
          axisLabel: {
            color: '#767676',
            interval: 0,
            // rotate: 30,
            fontSize: 10
          }
        },
        yAxis: {
          min: 0,
          max: 100,
          interval: 20,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ccc',
            }
          },
        },
        grid: {
          // x: 30, //图表距边框的距离
          y: 30,
          right: '20',
          bottom: '30'
          // x2: 30,
          // y2: 30,
        },
        series: [{
          type: 'line',
          data: [89, 90, 95, 93, 96, 94, 98, 95, 96, 98, 96, 97],
          lineStyle: {
            normal: {
              color: '#326cb1',
              width: 1
            }
          },
          itemStyle: {
            normal: {
              color: 'red',
              label: {
                show: true
              }
            }
          },
        }]
      });
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.showTabBar({
    //   complete: function(e){
    //     console.log('排行榜：',e)
    //   }
    // })
    // console.log('paihangbang')
    this.echartsComponnet = this.selectComponent('#mychart');
    this.init_echarts(); //初始化图表
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