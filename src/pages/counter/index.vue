<template>
  <div class="counter-warp">
    <p>this is counter1</p>
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main"
       class="home">去往首页</a>
    <a href="/pages/counter2/main"
       class="home">去2</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store';
import common from '@/utils/common';
import { setTimeout } from 'timers';
export default {
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    },
  },
  mounted() {
    console.log(common.getStorageSync('name2'));
    console.log(this.globalData.xxx);
    setTimeout(() => {
      common.removeStorageSync('name2');
    }, 5000)

  },
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
