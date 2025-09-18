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
          <card class="card-item" v-for="item in hospitalArr" :key="item.id" :hospitalInfo="item" />
        </div>
        <!-- 分页器 -->
        <div class="page-box">
          <el-pagination 
          @current-change="currentChange" 
          @size-change="sizeChange"
          v-model:current-page="pageNo" 
          v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]" 
            :size="size" 
            :disabled="disabled" 
            :background="background"
            layout="prev,pager,next,jumper,->,sizes,total" 
            :total="total" 
            />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入组合式api函数
import { onMounted, ref } from 'vue';
import { reqHospital } from '@/api/home/index';

// 引入子组件
import carousel from "../home/carousel/index.vue";
import Search from "../home/search/index.vue";
import level from "../home/level/index.vue";
import region from "../home/region/index.vue";
import card from "../home/card/index.vue";
import type {Content,HospitalResponseData} from '@/api/home/type';

interface Hospital {
  id: string;
  // 可以根据实际返回数据添加更多字段
  [key: string]: any;
}

// 分页器页码
const pageNo = ref<number>(1)
// 一页展示几条数据
const pageSize = ref<number>(10)
const size = ref('small')
const disabled = ref(false)
const background = ref(true)
// 存储已有医院数据
const hospitalArr = ref<Content>([])
// 存储医院总个数
const total = ref<number>(0)
// 页码变化时触发分页器重新加载
const currentChange = () => {
  getHospitalInfo()
}
// 分页器下拉菜单发生变化时触发
const sizeChange=()=>{
  getHospitalInfo()
}
// 组件挂载完毕发请求
onMounted(() => {
  getHospitalInfo()
})
// ... existing code ...
// 获取已有医院数据
const getHospitalInfo = async () => {
  // 获取医院数据
  await reqHospital(pageNo.value, pageSize.value).then((res: HospitalResponseData) => {
    console.log('获取到的医院数据:', res);
    // 存储已有医院数据
    hospitalArr.value = res.data.content
    // 存储医院总个数
    total.value = res.data.totalElements
    console.log('数组值:', hospitalArr.value);
  })
}
// ... existing code ...
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