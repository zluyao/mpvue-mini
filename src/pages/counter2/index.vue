<template>
  <div class="counter-warp">
    <p>{{msg}}</p>
    <a href="/pages/index/main"
       class="home">去往首页</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'this is counter2'
    }
  },
  computed: {

  },
  methods: {

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
