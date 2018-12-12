// pages/credit/credit.js

import * as echarts from '../../component/ec-canvas/echarts.min.js';
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picHost: app.globalData.picHost,
    ec: {
      lazyLoad: true // 延迟加载
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.echartsComponnet = this.selectComponent('#mychart');
    this.init_echarts(); //初始化图表
  },
  init_echarts: function() {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      Chart.setOption({
        radar: {
          name: {
            formatter: function(value, indicator) {
              value = String(value);
              if (value.length > 4) {
                indicator.nameTextStyle.fontSize = 14;
                return value.substring(0, 4) + '\n' + value.substring(4, value.length)
              } else {
                indicator.nameTextStyle.fontSize = 12;
                return value
              }
            },
          },
          indicator: [{
            name: '合规经营',
            max: 100,
          }, {
            name: '经营能力',
            max: 100,
          }, {
            name: '真实身份',
            max: 100,
          }, {
            name: '售后服务',
            max: 100,
          }, {
            name: '网络安全',
            max: 100,
          }, ],
          radius: 60,
          center: ['50%', '60%']
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
              opacity: 0.6,
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
                borderColor: '#fc20ff',
              },
              color: '#04c9b3',
              borderWidth: '2',
              borderColor: '#04c9b3'
            },
          },
          type: 'radar',
          data: [{
            value: [80, 90, 60, 90, 70],
            name: '指标评分',
          }],
        }],
        textStyle: {
          color: '#373738',
        },
      });
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
})