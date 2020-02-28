// pages/scene/scene.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  data: {
    showAvatar: false,
    back: true,
    photoUrl: "",
    place: ""
  },
  getPhoto() {
    wx.cloud.callFunction({
      name: 'getPhoto',
    }).then(res => {
      console.log('请求成功', res)
      this.setData({
        photoUrl: res.result.list[0].url,
        place: res.result.list[0].place
      })
    }).catch(err => {
      console.log('请求失败', err)
    })
  },
  downloadTap() {
    wx.cloud.downloadFile({
      fileID: this.data.photoUrl,
    }).then(res => {
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success(res){
          console.log(res)
        },
        fail(err){
          console.log(err)
        }
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onLoad: function(options) {
    this.getPhoto()
  },
})