<template>
  <div>
    <div class="buy-search">
      <div class="search-div">
        <div v-for="item in dic" :key="item" class="div-brand">
          <img :src="item.logo" alt="" />
          <span>{{ item.label }}</span>
        </div>
      </div>
      <div class="search-div">
        <span class="div-price" v-for="item in dec" :key="item">
          {{ item.label }}
        </span>
      </div>
      <div class="search-div">
        <span class="div-price" v-for="item in dsc" :key="item">
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
let dic = ref([]);
let dec = ref([]);
let dsc = ref([]);
let get = () => {
  axios({
    url: "/api/tfcar/car/convenient",
    headers: { PlatformType: "h5" },
  }).then((res) => {
    dic.value = res.data.data.convenientBrands;
    dec.value = res.data.data.convenientModels;
    dsc.value = res.data.data.convenientPrices;
  });
};

onMounted(() => {
  get();
});
</script>

<style scoped  lang="scss">
.div-price {
  width: 90px;
  height: 34px;
  background: #f5f7fe;
  border-radius: 17px;
  line-height: 34px;
  text-align: center;
  margin-right: 15px;
  cursor: pointer;
}
.buy-search {
  margin-left: 40px;
  font-size: 14px;
  margin-top: 30px;
}
.div-brand {
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
}
.div-brand img {
  width: 29px;
  height: 30px;
  margin-right: 12px;
}
.search-div {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
</style>