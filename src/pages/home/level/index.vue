<template>
  <div class="level"> 
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <div class="right">
        <ul>
          <li :class="{active: activeFlag === ''} " @click="changeLevel('','')">全部</li>
          <li v-for="item in levelList" :class="{active: Number(activeFlag) === Number(item.id)}" :key="item.id" @click="changeLevel(item.id,item.value)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
  import { reqHospitalLevelAndRegion } from '@/api/home';
  import type { HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr } from '@/api/home/type';
import { get } from 'node_modules/axios/index.d.cts';
  const getLevel = async ()=>{
    await reqHospitalLevelAndRegion('HosType').then((res:HospitalLevelAndRegionResponseData)=>{
      levelList.value = res.data;
      console.log(res.data);
    })
  }
  // 等级列表
  const levelList = ref<HospitalLevelAndRegionArr>([]);
  // 控制医院等级高亮响应式数据
  const activeFlag = ref<string>('');
  onMounted(()=>{
    getLevel()
  })
  // 子组件自定义事件切换等级
  const changeLevel = (id: string,value: string) => {
    activeFlag.value = id;
    // 触发自定义事件
    $emit('getLevelnumber',value);
  }
  // 自定义事件触发父组件切换等级
  const $emit = defineEmits(['getLevelnumber']);
</script>

<style scoped lang="scss">
  .level {
    color: #928d8d;
    h1 {
      font-size: 13px;
      margin: 10px 0;
    }
    .content {
      display: flex;

      .left {
        font-size: 13px;
        margin-right: 10px;
      }
      .right {
        ul {
          display: flex;
          li {
            margin: 0 10px 7px 7px;
            font-size: 13px;
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