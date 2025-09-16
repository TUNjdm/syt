<template>
  <div class="hospital_top">
    <div class="hospital_top_title">
      <div class="left">
        <img src="../../assets/images/logo.png" alt="">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.hospital_top {
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;

  .hospital_top_title {
    width: 1200px;
    height: 70px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      background-color: rgb(255, 255, 255);
      height: 70px;

      img {
        width: 50px;
        margin-right: 10px;
        margin-left: 20px;
      }

      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;
      background-color: rgb(255, 255, 255);
      height: 70px;
      .help {
        margin-right: 20px;
      }
      .login{
        margin-right: 20px;
      }
      p {
        font-size: 13px;
        color: #403d3d;
      }
    }
  }
}
</style>