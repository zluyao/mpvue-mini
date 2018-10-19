
// var apiUrl = 'https://xxx.com';
// var apiUrl = 'http://10.20.0.111:8393';
const apiUrl = 'http://10.20.0.536:8393';

function http(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: options.type || 'GET',
      url: apiUrl + options.url,
      data: options.data || {},
      header: options.headers || {},
      fail(ret) {
        wx.showToast({
          title: '请求异常,请刷新重试',
          icon: 'none',
          duration: 1500
        });
        reject(ret)   // 把错误信息传出去
      },
      complete: function (res) {
        if (res.data.code === '0') {
          resolve(res.data) // 把结果传出去
        } else {
          if (res.data.errorMsg) {
            wx.showToast({
              title: res.data.errorMsg,
              icon: 'none',
              duration: 1500
            });
          }
        }
      },
    })
  })
}

export default http;

