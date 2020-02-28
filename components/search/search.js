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
    show: {
      type: String,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    input: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input(event) {
      this.setData({
        input: event.detail.value
      })
    },
    sendInput() {
      this.triggerEvent("sendEvent", this.data.input); // sendEvent自定义名称事件
    }

  },

})