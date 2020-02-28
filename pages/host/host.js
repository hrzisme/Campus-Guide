// pages/host/host.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hideHeader: true,
    phoneWidth: 0,
  },

  onPageScroll(e) {
    let phoneWidth = (wx.getSystemInfoSync().windowWidth) / 3;
    if (e.scrollTop > phoneWidth) {
      this.setData({
        hideHeader: false
      })
    } else {
      this.setData({
        hideHeader: true
      })
    }
  },
  infoTap() {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  sceneTap(){
    wx.navigateTo({
      url: '../scene/scene',
    })
  },
  goTap() {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  gradeTap() {
    wx.navigateTo({
      url: '../grade/grade',
    })
  },
  boardTap(){
    wx.navigateTo({
      url: '../fair/fair'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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