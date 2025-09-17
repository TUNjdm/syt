<template>
  <div class="level"> 
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <div class="right">
        <ul>
          <li class="active">全部</li>
          <li>三级甲等</li>
          <li>三级甲等</li>
          <li>三级甲等</li>
          <li>三级甲等</li>
          <li>三级甲等</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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