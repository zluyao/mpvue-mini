function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}
function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('/');
  const t2 = [hour, minute, second].map(formatNumber).join(':');

  return `${t1} ${t2}`;
}

// 封装缓存方法，添加时效性
function setStorage(k, v, t) {
  // t => s
  wx.setStorage({
    key: k,
    data: v
  })
  if (t) {
    if (typeof (t) !== 'number') {
      throw 'the third param of function setStorageSync must bu a number';
      return;
    }
    wx.setStorage({
      key: k + 'time',
      data: t + Date.parse(new Date())
    })
  }

}
function getStorageSync(k) {
  // t => ms
  if (k === undefined || k === null) {
    return null;
  }
  if (wx.getStorageSync(k + 'time')) {
    const nowTime = Date.parse(new Date());
    const prevTime = wx.getStorageSync(k + 'time');
    if (nowTime > prevTime) {
      wx.removeStorageSync(k);
      wx.removeStorageSync(k + 'time');
      return null;
    } else {
      return wx.getStorageSync(k);
    }
  } else {
    return wx.getStorageSync(k);
  }
}
function removeStorageSync(k){
  if(!k){
    return wx.clearStorageSync();
  }else{
    wx.removeStorageSync(k);
    wx.removeStorageSync(k + 'time');
  }
}

export default {
  formatNumber,
  formatTime,
  setStorage,
  getStorageSync,
  removeStorageSync
};
