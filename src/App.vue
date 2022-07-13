<template>
  <div>
    <!-- 导航条 -->
    <div>
      <daohang></daohang>
    </div>
    <!-- 路由内容去 -->
    <div><router-view /></div>
    <!-- 底部 -->
    <!-- <div><dibu></dibu></div> -->
  </div>
</template>


<script setup>
import daohang from "./components/Nav.vue";
import dibu from "./components/Floor.vue";
</script>
<style  lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
