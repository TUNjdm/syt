<template>
  <!-- 搜索医院表单 -->
  <div class="search-hospital">
    <el-autocomplete 
    placeholder="请输入医院名称"
    clearable />
    <el-button type="primary" size="default" :icon="Search" />
  </div>
</template>

<script setup lang="ts">
// 引入图标
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.search-hospital {
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  // 深度选择器：>>>/deep/ ::v-deep
  :deep(.el-autocomplete){
    width: 700px;
    margin-right: 10px;
  }
}
</style>