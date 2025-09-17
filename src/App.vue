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
import request from './utils/request';
import { onMounted } from 'vue';
onMounted(() => {
  request.get('/hosp/hospital/1/10').then(res => {
    console.log('展示的数据:', res);
  }).catch(error => {
    console.error('请求出错:', error);
  });
});
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