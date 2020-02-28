// components/header.js
const DB = wx.cloud.database().collection('form-data');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "我的信息"
    },
    content1: {
      type: String,
      value: "毕业高中"
    },
    content2: {
      type: String,
      value: "当前专业"
    },
    content3: {
      type: String,
      value: "联系方式"
    },
    back: {
      type: Boolean,
      value: true
    },
    backWidth: {
      type: String,
      value: ""
    },
    backHeight: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    school: '',
    major: '',
    phone: '',
    ani: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    school(event) {
      this.setData({
        school: event.detail.value
      })
    },
    major(event) {
      this.setData({
        major: event.detail.value
      })
    },
    phone(event) {
      this.setData({
        phone: event.detail.value,
      })
    },
    backTap() {
      this.triggerEvent('customevent', {})
      this.setData({
        ani: "fade ease 1s forwards"
      })
    },

    finishTap() {
      this.triggerEvent('customevent', {})
      this.setData({
        ani: "fade ease 1s forwards"
      })
      if (this.data.school.length < 20 && this.data.major.length < 15 && this.data.phone.length < 15 && this.data.school.length != 0 && this.data.major.length != 0 && this.data.phone.length != 0) {
        DB.add({
          data: {
            school: this.data.school,
            major: this.data.major,
            phone: this.data.phone
          },
        }).then(res => {
          wx.showToast({
            title: '提交成功',
            icon: 'none',
            duration: 2000,
            mask: true,
          })
        }).catch(err => {
          wx.showToast({
            title: '提交失败',
            icon: 'none',
            duration: 2000,
            mask: true,
          })
        })

      } else {
        wx.showToast({
          title: '提交失败',
          icon: 'none',
          duration: 2000,
          mask: true,
        })
      }
    }
  },

})