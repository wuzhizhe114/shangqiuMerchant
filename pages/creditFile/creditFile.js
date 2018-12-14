// pages/creditFile/creditFile.js
let app = getApp();
import * as echarts from '../../component/ec-canvas/echarts.min.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: app.globalData.picHost,
    active: 0,
    ec: {
      lazyLoad: true // 延迟加载
    },
    leidaOption: {
      radar: {
        name: {
          formatter: '{value}'
        },
        indicator: [{
          name: '商户真实性',
          max: 100,
        }, {
          name: '合规经营情况',
          max: 100,
        }, {
          name: '管理服务情况',
          max: 100,
        }, {
          name: '消费环境情况',
          max: 100,
        }, {
          name: '商品可信度',
          max: 100,
        }, ],
        radius: 40,
        center: ['50%', '55%']
      },
      grid: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
      },
      series: [{
        areaStyle: {
          normal: {
            opacity: 0.5,
          }
        },
        itemStyle: {
          normal: {
            lineStyle: {
              width: 1,
              borderColor: '#fc20ff',
            },
            color: '#04c9b3',
            borderWidth: '1',
            borderColor: '#04c9b3'
          },
        },
        type: 'radar',
        data: [{
          value: [80, 90, 60, 90, 70],
          name: '指标评分',
          // 拐点显示数值
          // label: {
          //   normal: {
          //     show: true,
          //     formatter: function(params) {
          //       return params.value;
          //     },
          //     position:'inside',
          //     color: '#fa595e'
          //   }
          // }
        }],
      }],
      textStyle: {
        color: '#373738',
      },
    },
    zhexianOption: {
      //x轴信息样式
      xAxis: {
        data: ['7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月'],
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
    }
  },
  init_echarts: function(echartComp, option) {
    // let that = this;
    echartComp.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      Chart.setOption(option);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let leidaComponnet = this.selectComponent('#leidaChart');
    let zhexianComponnet = this.selectComponent('#zhexianChart');
    // this.echartsComponnet = this.selectComponent('#leidaChart');
    this.init_echarts(leidaComponnet, this.data.leidaOption); //初始化图表
    this.init_echarts(zhexianComponnet, this.data.zhexianOption); //初始化图表
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