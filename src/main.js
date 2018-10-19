import Vue from 'vue';
import App from './App.vue';
import http from './utils/request';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

Vue.prototype.$http = http;
// 定义全局变量
Vue.prototype.globalData = getApp().globalData;
Vue.prototype.globalData.xxx = 'xxxx';
