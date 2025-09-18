<template>
  <div class="region">
    <div class="content">
      <div class="left">
        地区:
      </div>
      <div class="right">
        <ul>
          <li :class="{active:regionFlag === ''}" @click="changeLevel('','')">全部</li>
          <li v-for="item in regionList" :key="item.id" :class="{active:Number(regionFlag) === item.id}" @click="changeLevel(String(item.id),item.value)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { reqHospitalLevelAndRegion } from '@/api/home';
import type { HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr } from '@/api/home/type';
onMounted(()=>{
  getRegion()
})
const getRegion = async () => { 
  await reqHospitalLevelAndRegion('Beijin').then((res:HospitalLevelAndRegionResponseData)=>{
    regionList.value = res.data;
    console.log('地区数组：',regionList.value);
})
}
// 地区列表
const regionList = ref<HospitalLevelAndRegionArr>([]);
  // 控制地区等级高亮响应式数据
  const regionFlag = ref<string>('');
  // 切换等级
  const changeLevel = (id: string,value: string) => {
    console.log('id:',id);  
    console.log('value:',value);
    regionFlag.value = id;
    // 给父组件传递区域的参数
    $emit('getRegion',value);
  }
  // 自定义事件触发父组件切换地区
  const $emit = defineEmits(['getRegion']);
</script>

<style scoped lang="scss">
.region {
  margin:20px 0;
    color: #928d8d;
    .content {
      display: flex;

      .left {
        font-size: 13px;
        margin-right: 10px;
        white-space: nowrap;
      }
      .right {
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            font-size: 13px;
            margin: 0 10px 7px 7px;
            &.active {
              color: #55a6fe
            }
          }
          li:hover {
            color: #55a6fe;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>