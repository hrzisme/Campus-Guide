// pages/test/test.js
Page({
  add() {
    wx.cloud.callFunction({
      name: "getData",
    }).then(res => {
      console.log('斯国一', res.result.data)
    }).catch(err => {
      console.log('亚美爹',err)
    })
  }
})