// pages/fair/fair.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    formShow: false,
    backWidth: '',
    backHeight: '',
    cardList: []
  },
  onPageScroll(e) {
    if (e.scrollTop > 10) {
      this.setData({
        show: false,
      })
    } else {
      this.setData({
        show: true,
      })
    }
  },
  addTap() {
    this.setData({
      formShow: true,
      show: false
    })
  },
  finishTap() {
    this.setData({
      formShow: false,
      show: true
    })
    this.onLoad()
  },
  receiveInput(res) {
    console.log(res.detail),
      db.collection('form-data').where({
        school: res.detail
      }).get().then(res => {
        console.log(res.data)
        if (res.data.length != 0) {
          this.setData({
            cardList: res.data,
          })
        } else {
          this.onLoad();
          wx.showToast({
            icon: "none",
            title: '未搜到该校友',
            duration:2000
          })
        }
      }).catch(err => {
        console.log('请求失败', err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.cloud.callFunction({
      name: 'getData',
      data:{
        collection:'form-data'
      }
    }).then(res => {
      console.log('请求成功', res),
        this.setData({
          cardList: res.result.data,
        })
    }).catch(err => {
      console.log('请求失败', err)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          backHeight: 2 * res.windowHeight + "px",
          backWidth: res.windowWidth + "px"
        })
      },
    })
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