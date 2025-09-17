<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop />
    <div class="content">
      <!-- 中间 -->
       <router-view></router-view>
    </div>
    <!-- 底部 -->
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;  
  .content {
    margin-top: 70px;
    width:1160px;
  }
}
</style>