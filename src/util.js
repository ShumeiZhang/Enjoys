// 工具函数库
/* eslint-disable */
import config from './config'

export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        // success
        if (res.data.code === 0) {
          reslove(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
