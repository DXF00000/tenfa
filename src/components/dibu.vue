<template>
  <div>
    <div class="news-item">
      <img :src="item.cover" class="news-img" />
    </div>
    <div class="news-item-info">
      <div class="news-item-title news-title1">{{ item.title }}</div>

      <div class="news-item-title news-title2">{{ item.simple }}</div>
      <div class="news-num">
        <div>{{ data }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
// 计算属性
let data = computed(() => {
  let data = new Date(props.item.ctime);
  let year = data.getFullYear();
  let month = data.getMonth() + 1;
  return year + "年" + (month < 10 ? "0" + month : month) + "月";
});

let props = defineProps(["item"]);
</script>

<style  scoped  lang="scss">
.news-title2 {
  font-size: 14px;
  color: #666666;
  line-height: 20px;
  height: 40px;
  margin-bottom: 26px;
}

.news-item-title {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-title1 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 14px;
  height: 52px;
}

.news-num {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
  font-size: 12px;
  line-height: 20px;
}
.news-item-info {
  margin: 20px;
}
.news-item {
  width: 380px;

  box-sizing: border-box;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f7fe;
  margin-right: 30px;
  margin-bottom: 70px;
}
.news-img {
  width: 380px;
  height: 285px;
  border-radius: 8px;
}
</style>