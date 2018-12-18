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
    // console.log(app)
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
            formatter: '{value}'
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
      });
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  imagesPreview() {
    // app.imagesReview(this.data.picHost+'demo/first_pic.png',[
    //   'https://clueless.gitee.io/shangqiuimages/merchant/demo/first_pic.png',
    //   'https://clueless.gitee.io/shangqiuimages/merchant/demo/qiandama.png',
    //   'https://clueless.gitee.io/shangqiuimages/merchant/demo/second_pic.png',
    // ])
    wx.previewImage({
      current: this.data.picHost + 'demo/first_pic.png', // 当前显示图片的http链接
      urls: [
        'https://clueless.gitee.io/shangqiuimages/merchant/demo/first_pic.png',
        'https://clueless.gitee.io/shangqiuimages/merchant/demo/qiandama.png',
        'https://clueless.gitee.io/shangqiuimages/merchant/demo/second_pic.png',
      ] // 需要预览的图片http链接列表
    })
  }
})