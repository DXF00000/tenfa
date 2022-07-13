<template>
  <div class="list-title">
    <div class="list-left">
      <div class="search-line"></div>
      <div class="title-text">{{ res }}</div>
    </div>
    <div class="list-left">
      <span @click="tz"> 查看更多</span>
      <img
        src="https://www.tf2sc.cn/static/img/icon_%E6%9B%B4%E5%A4%9A.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

let props = defineProps(["res"]);
let router = useRouter();
let tz = () => {
  router.push("/usedcar");
};
</script>

<style scoped >
.title-text {
  line-height: 32px;
  font-weight: 600;
  font-size: 24px;
  margin-left: 20px;
}
.list-title {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-left {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666666;
}
.search-line {
  width: 10px;
  height: 30px;
  background: #5685fe;
}
</style>