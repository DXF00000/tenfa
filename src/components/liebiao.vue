<template>
  <div>
    <div class="list-item" @click="tiaoz(item.ind)">
      <div class="list-item-img">
        <img :src="item.cover" width="270" height="208" />
        <div class="item-type type-re" :style="{ background: typeCss }">
          {{ typeText }}
        </div>
      </div>
      <div class="item-info">
        <div class="item-info-title">{{ item.carName }}</div>
        <div class="item-info-time">{{ data }}</div>
        <div class="item-info-price">
          <span class="price1"> {{ item.currentPrice }}万</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
let props = defineProps(["item"]);
let emit = defineEmits(["tiaoz"]);

// 自定义事件
let tiaoz = (id) => {
  emit("tiaoz", id);
};

// 计算属性
let data = computed(() => {
  let data = new Date(props.item.dateOfRegistration);
  let year = data.getFullYear();
  let month = data.getMonth() + 1;
  return year + "年" + (month < 10 ? "0" + month : month) + "月";
});

let typeCss = ref("");
let typeText = ref("");
switch (props.item.saleType) {
  case 2:
    typeText.value = "限时特惠";
    typeCss.value = "linear-gradient(90deg, #ff1766 0%, #ff2a23 100%)";
    break;
  case 0:
    typeText.value = "腾发自营";
    typeCss.value = "linear-gradient(90deg, #FF8856 0%, #FF4725 100%)";
    break;
  case 1:
    typeText.value = "腾发自营";
    typeCss.value = "linear-gradient(90deg, #FF8856 0%, #FF4725 100%)";
    break;
  default:
    break;
}
</script>

<style  scoped  lang="scss">
/* xs */
.item-type {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
  width: 64px;
  height: 20px;
  border-radius: 0px 4px 4px 0px;
}

.type-re {
  background: linear-gradient(90deg, #ff1766 0%, #ff2a23 100%);
}
/*  */
.item-info-time {
  font-size: 14px;
  color: #999999;
  line-height: 20px;
  margin-bottom: 20px;
}
.item-info-price {
  display: flex;
  align-items: center;
  color: #e73424;
  font-size: 12px;
}
.price1 {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 10px;
}
.item-info {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 18px;
}
.item-info-title {
  width: 257px;
  line-height: 26px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 10px;
}
.list-item {
  display: block;
  width: 277px;
  height: 358px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f7fe;
  box-sizing: border-box;
  margin-right: 23px;
  margin-bottom: 30px;
  position: relative;
}
.list-item-img {
  width: 275px;
  height: 208px;
  position: relative;
}
.list-item-img img {
  border-radius: 8px 8px 0px 0px;
}
</style>