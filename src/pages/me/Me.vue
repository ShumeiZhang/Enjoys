<template>
  <div class="container">
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button class="btn">添加图书</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {}
    }
  },
  created() {
    this.userinfo = wx.getStorageSync('userinfo')
  }
}
</script>

<style lang="scss">
.container {
  padding: 0 30rpx;
}  
.userinfo {
  margin-top: 100rpx;
  text-align: center;
  img {
    width: 150rpx;
    height: 150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}
</style>


