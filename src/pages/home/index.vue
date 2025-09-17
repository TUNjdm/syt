<template>
  <div>
    <!-- 首页轮播图 -->
    <carousel />
    <!-- 首页搜索框 -->
    <Search />
    <!-- 底部结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <level />
        <!-- 地区 -->
        <region />
        <!-- 展示医院卡片 -->
        <div class="card-box">
          <!-- 循环插入多张医院卡片 -->
          <card class="card-item" v-for="index in 9" :key="index" />
        </div>
          <!-- 分页器 -->
          <div class="page-box">
            <el-pagination 
            v-model:current-page="pageNo" 
            v-model:page-size="pageSize" 
            :page-sizes="[10, 20, 30, 40]"
            :size="size" 
            :disabled="disabled" 
            :background="background" 
            layout="prev,pager,next,jumper,->,sizes,total"
            :total="400" />
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入子组件
import carousel from "../home/carousel/index.vue";
import Search from "../home/search/index.vue";
import level from "../home/level/index.vue";
import region from "../home/region/index.vue";
import card from "../home/card/index.vue";

// 引入分页器组件需要的数据
import { ref } from 'vue'
// 分页器页码
const pageNo = ref<number>(1)
// 一页展示几条数据
const pageSize = ref<number>(10)
const size = ref('small')
const disabled = ref(false)
const background = ref(true)
const handleSizeChange = (val: number) => {
  pageSize4.value = val
}
const handleCurrentChange = (val: number) => {
  currentPage4.value = val
}
</script>
<style lang="scss">
.card-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.el-pagination {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>