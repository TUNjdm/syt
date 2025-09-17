<template>
  <div class="region">
    <div class="content">
      <div class="left">
        地区:
      </div>
      <div class="right">
        <ul>
          <li class="active">全部</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li>杭州</li>
          <li v-for="item in 10" :key="item">
            西湖美景
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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