<template>
  <div>
    <div class="index-body">
      <div class="body-bg"></div>
      <div class="body-search">
        <div class="search">
          <img src="../assets/卖车的好处.png" alt="" class="body-car-img" />
          <div class="search-gd">腾发二手车</div>
          <div class="search-sr">
            <input
              type="text"
              class="search-input"
              placeholder="搜索品牌、车型"
              id="search-in"
              v-model="ssk"
            />
            <button class="search-btn" id="search-btn" @click="shuru">
              搜索
            </button>
          </div>
          <div class="buy-sell">
            <div class="buy">
              <div class="buy-title">
                <div class="search-line"></div>
                <div class="title-text">我要买车</div>
              </div>
              <maiche
                @dianji="dianji"
                @dianji1="dianji1"
                @dianji2="dianji2"
              ></maiche>
            </div>
            <div class="sell">
              <div class="buy-title">
                <div class="search-line"></div>
                <div class="title-text">我要卖车</div>
              </div>
              <div class="sell-container">
                <div class="container-left">
                  <div class="container-input">
                    <input
                      type="text"
                      placeholder="请输入手机号"
                      id="container-gz-in"
                      maxlength="11"
                    />
                    <button type="button" id="container-gz-btn">
                      立即估值
                    </button>
                  </div>
                  <div class="container-gz">
                    <span class="gz-link">
                      <img
                        src="https://www.tf2sc.cn/static/img/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1.png"
                      />
                      <span>全国代购</span>
                    </span>
                    <div class="gz-line"></div>
                    <span class="gz-link">
                      <img
                        src="https://www.tf2sc.cn/static/img/%E5%88%B0%E5%BA%97%E4%BC%B0%E5%80%BC.png"
                      />
                      <span>到店估值</span>
                    </span>
                  </div>
                </div>
                <div class="container-right">
                  <img src="../assets/我要卖车.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <biaoti :res="res"></biaoti>
        <div class="list">
          <template v-for="item in data" :key="item">
            <liebiao :item="item" @tiaoz="tiaoz"></liebiao>
          </template>
        </div>
        <xinche :res="xin"></xinche>
        <dibu :res="zixun"></dibu>
        <div class="list">
          <template v-for="item in data2" :key="item">
            <bibu :item="item"></bibu>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "../reqst/http";
import biaoti from "../components/tiao.vue";
import bibu from "../components/dibu.vue";
import xinche from "../components/xinche.vue";
import maiche from "../components/maiche.vue";
import dibu from "../components/xinwen.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import liebiao from "../components/liebiao.vue";
import { useStore } from "vuex";
let res = ref("二手车");
let xin = ref("新车");
let zixun = ref("新闻资讯");
let ssk = ref("");
let data = ref([]);
let data2 = ref([]);
let get = () => {
  axios({
    url: "/api/tfcar/car/list?",
  }).then((res) => {
    data.value = res.data.data.content;
  });
};

let gait = () => {
  axios({
    url: "/api/tfcar/website/indexNews  ",
  }).then((res) => {
    data2.value.push(res.data.data[0]);
    data2.value.push(res.data.data[1]);
  });
};
// 路由跳转

let storer = useRouter();
let tiaoz = (id) => {
  storer.push({
    path: "/detail",
    query: {
      num: id,
    },
  });
};

let canshu = ref([]);
// // 品牌跳转
// 类型跳转
let dianji = (carBrand) => {
  storer.push({
    path: "/usedcar",
    query: {
      carBrand,
    },
  });
};
let dianji1 = (carModel) => {
  storer.push({
    path: "/usedcar",
    query: {
      carModel,
    },
  });
};
let dianji2 = (currentPriceLt) => {
  console.log(currentPriceLt);
  storer.push({
    path: "/usedcar",
    query: {
      currentPriceLt,
    },
  });
};

// 价格跳转

// 搜索跳转
let shuru = () => {
  storer.push({
    path: "/usedcar",
    query: {
      text: ssk.value,
    },
  });
};

get();
gait();
</script>

<style  scoped  lang="scss">
// 右
.sell {
  width: 586px;
  height: auto;
}
.list {
  width: 1200px;
  padding: 30px 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.buy-title {
  display: flex;
  align-items: center;
}
.buy-sell {
  width: 1200px;
  height: 301px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
  border-radius: 14px;
  box-sizing: border-box;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
}
.search-input {
  margin-left: 20px;
  width: 490px;
  height: 100%;
  border: none;
  font-size: 18px;
  outline: none;
}
.container-input input {
  height: 38px;
  width: 200px;
  outline: none;
  border: none;
}
.container-input {
  width: 330px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 20px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.gz-line {
  width: 1px;
  height: 29px;
  background: #d8e3ff;
}

.gz-link {
  display: flex;
  align-items: center;
  width: 164px;
  justify-content: center;
}
.gz-link img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.container-gz {
  width: 330px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 1px 10px 0px rgb(170 170 216 / 40%);
  border-radius: 7px;
  display: flex;
  align-items: center;
}
.container-input button {
  width: 96px;
  height: 40px;
  background: #5685fe;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid #f0f0f0;
  color: #ffffff;
}
.container-left {
  width: 330px;
  height: 136px;
}
.container-right,
.container-right img {
  width: 179px;
  height: 173px;
}
.sell-container {
  width: 586px;
  height: 177px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.body-bg {
  width: 100%;
  height: 300px;
  background: url("../assets/蓝色背景.png") 50% center no-repeat;
  background-position: 50% center;
}

.search-gd {
  margin-bottom: 20px;
  font-family: pmzd;
  line-height: 50px;
  font-size: 40px;
  background-image: -webkit-linear-gradient(top, #f9edd5, #f5cb4f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.body-car-img {
  position: absolute;
  top: -24px;
  right: -28px;
  width: 420px;
  height: 229px;
  z-index: 3;
}
.search {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.search-sr {
  width: 640px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 50px;
}
.search-btn {
  width: 116px;
  height: 100%;
  background: #5685fe;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid #f0f0f0;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
}
.search-line {
  width: 10px;
  height: 30px;
  background: #5685fe;
}
.title-text {
  line-height: 32px;
  font-weight: 600;
  font-size: 24px;
  margin-left: 20px;
}
.index-body {
  width: 100%;
  position: relative;
}
.body-search {
  position: absolute;
  z-index: 1;
  top: 73px;
  width: 100%;
}
</style>