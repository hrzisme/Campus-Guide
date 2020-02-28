// components/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    color: {
      type: String,
      value: '#fada1b'
    },
    boxshadow: {
      type: String,
      value: "5px 5px 10px #eeeeee"
    },
    animation:{
      type: String,
      value: 'add ease-in-out 0.8s forwards;'
    },
    imgSrc: {
      type: String,
      value: '../../images/add.png'
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
    onTap() {
      this.triggerEvent('customevent', {})
    }
  },

})