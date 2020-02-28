// pages/grade/grade.js
import * as echarts from '../../components/ec-canvas/echarts';
var gradeData = require('../../data/gradeData.js')
var app = new App();
let chart = null;
var cityNo = 0;
// 2、进行初始化数据
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
  ];

  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: echarts.util.reduce(posList, function(map, pos) {
        map[pos] = pos;
        return map;
      }, {})
    },
    distance: {
      min: 0,
      max: 100
    }
  };

  app.config = {
    rotate: 0,
    align: 'left',
    verticalAlign: 'middle',
    position: 'inside',
    distance: 15,
  };


  var labelOption = {
    normal: {
      show: true,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {
          textBorderColor: '#fff'
        }
      }
    }
  };
  var option = {
    color: ['#004c70', '#f2635f', '#0093d1', '#f4d00c'],

    legend: {
      data: ['一批理工', '一批文史', '专项理工', '提前理工']
    },

    calculable: true,
    xAxis: [{
      type: 'value'
    }],
    yAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['2015', '2016', '2017', '2018']
    }],
    series: [{
        name: '一批理工',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        data: gradeData.gradeData[cityNo].data1
      },
      {
        name: '一批文史',
        type: 'bar',
        label: labelOption,
        data: gradeData.gradeData[cityNo].data2
      },
      {
        name: '专项理工',
        type: 'bar',
        label: labelOption,
        data: gradeData.gradeData[cityNo].data3
      },
      {
        name: '提前理工',
        type: 'bar',
        label: labelOption,
        data: gradeData.gradeData[cityNo].data4
      }
    ]
  };
  chart.setOption(option);
  return chart;
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart // 3、将数据放入到里面
    },
    gdData: [],
    hideHeader: false,
    array: ['北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区'],
    index: 0,
    typeList: [{
      id: '0001',
      linecolor: '#004c70',
      typeTxt: '本科一批：理工'
    }, {
      id: '0002',
      linecolor: '#f2635f',
      typeTxt: '本科一批：文史'
    }, {
      id: '0003',
      linecolor: '#0093d1',
      typeTxt: '国家专项：理工'
    }, {
      id: '0004',
      linecolor: '#f4d00c',
      typeTxt: '本科提前：理工'
    }]
  },
  bindPickerChange(e) {
    var option = chart.getOption()
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    cityNo = e.detail.value
    console.log(cityNo)
    option.series[0].data = gradeData.gradeData[cityNo].data1
    option.series[1].data = gradeData.gradeData[cityNo].data2
    option.series[2].data = gradeData.gradeData[cityNo].data3
    option.series[3].data = gradeData.gradeData[cityNo].data4
    chart.setOption(option)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function(options) {
    this.setData({
        gdData: gradeData
      })
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