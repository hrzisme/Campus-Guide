var backData = require('../../data/data.js')
Page({
  data: {
    show: true,
    back: true,
    index: 0,
    backDt: []
},

leftTap() {
  let dataIndex = this.data.index;
  if (dataIndex > 0) {
    this.setData({
      index: dataIndex - 1
    })
  }
},
rightTap() {
  let dataIndex = this.data.index;
  let length = this.data.backDt.length - 1;
  if (dataIndex < length) this.setData({
    index: dataIndex + 1
  })
},
regionchange(e) {
  console.log(e.type)
},
markertap(e) {
  console.log(e.markerId)
},
controltap(e) {
  console.log(e.controlId)
},
showTap() {
  this.setData({
    show: !this.data.show
  })
},
onLoad: function(options) {
  this.setData({
    backDt: backData.bgData
  });
},

})