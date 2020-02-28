// components/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc: {
      type: String,
      value: ""
    },
    titleTxt: {
      type: String,
      value: ""
    },
    background: {
      type: String,
      value: "#2bacea;"
    },
    boxshadow: {
      type: String,
      value: "0px 3px 6px #cdcdcd;"
    },
    hideHeader: {
      type: Boolean,
      value: true
    },
    showAvatar: {
      type: Boolean,
      value: true
    },
    back: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backTap() {
      wx.navigateBack({
        delta: 1
      })
    }
  },

})