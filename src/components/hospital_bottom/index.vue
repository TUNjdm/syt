<template>
  <div class="bottom">
    <!-- 底部 -->
     <div class="content">
      <div class="left">
        京ICP备 13018369号 电话挂号010-56253825
      </div>
      <div class="right"> 
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
     </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  .content {
    width: 1160px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    color: rgb(145, 159, 155);
    .left {
      line-height: 50px;
      font-size: 13px;
    }
    .right {
      line-height: 50px;
      font-size: 13px;
    }
    .right {
      span {
        margin-right: 5px;
      }
    }
  }
}
</style>