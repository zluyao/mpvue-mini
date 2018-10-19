<template>
  <div class="container">
    <h3 @click="tocounter">xxxx</h3>
    <div class="video-box">
      <video id="myVideo"
             src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
             :loop="true"
             :autoplay="false"
             controls></video>
    </div>
    <!-- <div class="userinfo">
      <img class="userinfo-avatar"
           v-if="userInfo.avatarUrl"
           :src="userInfo.avatarUrl"
           background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div>
      <div class="section">
        <div class="section__title">日期选择器</div>
        <picker mode="date"
                :value="date"
                start="2015-09-01"
                end="2017-09-01"
                @change="bindDateChange">
          <div class="picker">
            当前选择日期: {{date}}
          </div>
        </picker>
      </div>
    </div> -->
  </div>
</template>

<script>
import card from '@/components/card';
import common from '@/utils/common';

export default {
  data() {
    return {
      userInfo: {},
      date: '2016-09-02',
    };
  },

  components: {
    card,
  },

  methods: {
    tocounter() {
      wx.navigateTo({
        url: '/pages/counter/main'
      })
    },
    bindDateChange: function (e) {
      console.log(e);
      console.log('picker发送选择改变，携带值为', e.target.value);
      this.date = e.target.value
    },
    getUserInfo() {
      // 调用登录接口
      console.log(22);
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(22);
              this.userInfo = res.userInfo;
            },
          });
        },
      });
    },

  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    wx.setNavigationBarTitle({
      title: '母婴安心保险方案'
    });

  },
  mounted() {
    console.log(common.formatNumber(5));
    console.log(this.globalData.xxx);
    this.globalData.xxx = 111;
    console.log(this.globalData.xxx);
    common.setStorage('name2', 'lihua', 50000);

    this.$http({
      url: '/wx/api/order/getOrderSuccessInfo/' + 'jx20181018181047242607777',
    }).then((res) => {
      console.log('success', res)
    }).catch((err) => {
      console.log('fail', err);
    });

  },
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
