<template>
  <div>
    <div class="buy-body">
      <div class="buy-div">
        <div class="buy-search">
          <input
            type="text"
            id="buy-search-input"
            placeholder="搜索品牌、车型"
            v-model="sss"
          />
          <button id="buy-search-btn">搜索</button>
        </div>
        <div class="buy-sift">
          <div class="buy-sift-div">
            <div class="sift-div-list">
              <div>品牌：</div>
              <p class="sift-div-checked">不限</p>
              <p v-for="(item, i) in pq" :key="i" @click="pqd(item.id)">
                {{ item.brand }}
              </p>
            </div>
          </div>
          <div class="sift-series-list buy-sift-div-mt">
            <div>车系：</div>
            <div class="series-list-div">
              <p class="sift-div-checked">不限</p>
              <p>宝马X4M</p>
            </div>
          </div>
          <div class="buy-sift-div">
            <div class="sift-div-list">
              <div>车型：</div>
              <p class="sift-div-checked">不限</p>
              <p v-for="(item, i) in cx" :key="i">{{ item.abbreviation }}</p>
            </div>
          </div>

          <div class="buy-sift-div">
            <div class="sift-div-list" style="margin: 18px 0 8px 0">
              <div>价格：</div>
              <p class="sift-div-checked">不限</p>
              <p v-for="item in jg" :key="item">{{ item.label }}</p>
              <div class="sift-price-div">
                <div class="sift-price-in">
                  <input
                    type="text"
                    id="min-price"
                    maxlength="3"
                    placeholder="输入金额"
                  />
                  <span>——</span>
                  <input
                    type="text"
                    id="min-price"
                    maxlength="3"
                    placeholder="输入金额"
                  />
                  <span style="margin-left: 10px">万</span>
                </div>
                <button class="price-in-btn">确定</button>
              </div>
            </div>
          </div>
          <div class="buy-sift-div">
            <div class="sift-div-list">
              <div>更多</div>
              <div class="tfcar-select">
                <span>燃油类型</span>
                <i></i>
                <div class="select-list">
                  <div>
                    <p class="sift-div-checked">不限</p>
                    <p v-for="item in rylx" :key="item">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="tfcar-select">
                <span>驱动类型</span>
                <i></i>
                <div class="select-list">
                  <div>
                    <p class="sift-div-checked">不限</p>
                    <p v-for="item in qd" :key="item">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="tfcar-select">
                <span>座位数</span>
                <i></i>
                <div class="select-list">
                  <div>
                    <p class="sift-div-checked">不限</p>
                    <p v-for="item in zws" :key="item">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="tfcar-select">
                <span>排量</span>
                <i></i>
                <div class="select-list">
                  <div>
                    <p class="sift-div-checked">不限</p>
                    <p v-for="item in pl" :key="item">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="tfcar-select">
                <span>变速箱</span>
                <i></i>
                <div class="select-list">
                  <div>
                    <p class="sift-div-checked">不限</p>
                    <p v-for="item in bsx" :key="item">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="tfcar-select">
                <span>里程</span>
                <i></i>
                <div class="select-list">
                  <div>
                    <p class="sift-div-checked">不限</p>
                    <p v-for="item in lc" :key="item">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="tfcar-select">
                <span>排放</span>
                <i></i>
                <div class="select-list">
                  <div>
                    <p class="sift-div-checked">不限</p>
                    <p v-for="item in qf" :key="item">
                      {{ item.label }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sift-num">
          <div class="sift-now-div">
            <span>当前筛选：</span>
            <div class="sift-now">
              <span></span>
              <span class="sift-now-text"></span>
              <p class="sift-now-del"></p>
            </div>
            <p class="sift-reset">
              <i></i>
              <span>重置条件</span>
            </p>
          </div>
        </div>
        <div class="sift-list">
          <div class="sift-car-top">
            <div class="car-top-left">
              <p class="top-left-checked">全部</p>
              <p>腾发自营</p>
              <p>车主直售</p>
              <p>限时秒杀</p>
              <p>严选车源</p>
            </div>
            <div class="car-top-right">
              <p class="top-right-checked">默认排序</p>
              <span></span>
              <p>最新发布</p>
              <span></span>
              <p>价格最高</p>
              <span></span>
              <p>价格最低</p>
            </div>
          </div>
          <div class="sift-car-body">
            <template v-for="item in data" :key="item">
              <liebiao :item="item" @tiaoz="tiaoz"></liebiao>
            </template>
          </div>
          <div class="elul">
            <el-pagination
              v-model:currentPage="currentPage"
              :page-size="20"
              :background="true"
              layout="total,  prev, pager, next, jumper"
              :total="3779"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "../reqst/http";
import liebiao from "../components/liebiao.vue";
import { useRoute, useRouter } from "vue-router";
// ul 请求
const handleCurrentChange = (val) => {
  if (Object.keys(route.query).length) {
    if (Object.keys(route.query)[0] == "text") {
      qqtz(val);
    } else if (Object.keys(route.query)[0] == "carBrand") {
      qingpai(val);
    } else if (Object.keys(route.query)[0] == "carModel") {
      cexin1(val);
    } else if (Object.keys(route.query)[0] == "currentPriceLt") {
      jiage1(val);
    }
  } else {
    get(val);
  }
};
// 路由跳转详情
let storer = useRouter();
let tiaoz = (id) => {
  storer.push({
    path: "/detail",
    query: {
      num: id,
    },
  });
};
let sss = ref("");
// 列表请求默认请求
let data = ref([]);
let currentPage = ref(1);
let get = (i) => {
  axios({
    url: `/api/tfcar/car/list?page=${i}`,
  }).then((res) => {
    console.log(res.data.data);
    data.value = res.data.data.content;
  });
};
// 路由跳转请求search=宝马
let route = useRoute();
// 列表搜索请求
let qqtz = (i) => {
  axios({
    url: `/api/tfcar/car/list?page=${i}&sort=
`,
    params: {
      carName: route.query.text,
    },
  }).then((res) => {
    console.log(res.data.data);
    data.value = res.data.data.content;
  });
};
// 品牌 列表渲染
let qingpai = (i) => {
  axios({
    url: `/api/tfcar/car/list?page=${i}&sort=
`,
    params: {
      carBrand: route.query.carBrand,
    },
  }).then((res) => {
    console.log(res.data.data);
    data.value = res.data.data.content;
  });
};
let cexin1 = (i) => {
  axios({
    url: `/api/tfcar/car/list?page=${i}&sort=
`,
    params: {
      currentPriceLt: route.query.currentPriceLt,
    },
  }).then((res) => {
    console.log(res.data.data);
    data.value = res.data.data.content;
  });
};
let jiage1 = (i) => {
  axios({
    url: `/api/tfcar/car/list?page=${i}&sort=
`,
    params: {
      carModel: route.query.carModel,
    },
  }).then((res) => {
    console.log(res.data.data);
    data.value = res.data.data.content;
  });
};

// https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=&currentPriceLt=20 首页点击第三层
// page: 1
// sort:
// currentPriceLt: 20
// carBrand: 7 点击宝马 传递id
// 两厢https://api.tf2sc.cn/api/tfcar/car/list?page=1&sort=&carModel=1  carModel: 1 传递一个cond
if (Object.keys(route.query).length) {
  console.log(Object.keys(route.query)[0]);
  if (Object.keys(route.query)[0] == "text") {
    qqtz(1);
  } else if (Object.keys(route.query)[0] == "carBrand") {
    qingpai(1);
  } else if (Object.keys(route.query)[0] == "carModel") {
    cexin1(1);
  } else if (Object.keys(route.query)[0] == "currentPriceLt") {
    jiage1(1);
  }
} else {
  get(1);
}

let pq = ref([]);
// 品牌
let pingpai = () => {
  axios({
    url: "/api/tfcar/car/customSeries",
  }).then((res) => {
    // console.log(res.data.data[0].brands);
    pq.value = res.data.data[0].brands;
  });
};

// 点击事件
let pqd = (id) => {};
let cxi = ref([]);
let chexi = () => {
  axios({
    url: "/c0/ershouche/s7",
  }).then((res) => {
    console.log(res.data.data);
  });
};

let cx = ref([]);
// 车型
let chexing = () => {
  axios({
    url: "/api/tfcar/car/model",
  }).then((res) => {
    // console.log(res.data.data.content);
    cx.value = res.data.data.content;
  });
};
let jg = ref([]);
// 价格
let jiage = () => {
  axios({
    url: "/api/tfcar/car/price",
  }).then((res) => {
    // console.log(res.data.data);
    jg.value = res.data.data;
    // console.log(jg.value);
  });
};
let pl = ref([]);
let qd = ref([]);
let qf = ref([]);
let rylx = ref([]);
let bsx = ref([]);
let lc = ref([]);
let zws = ref([]);
// 更多
let genduo = () => {
  axios({
    url: "/api/tfcar/car/moreScreen",
  }).then((res) => {
    pl.value = res.data.data.more_screen_displacement;
    qd.value = res.data.data.more_screen_drive_type;
    qf.value = res.data.data.more_screen_emission_standard_type;
    rylx.value = res.data.data.more_screen_fuel_type;
    bsx.value = res.data.data.more_screen_gearbox_type;
    lc.value = res.data.data.more_screen_mileage;
    zws.value = res.data.data.more_screen_seat_num;
  });
};

pingpai();
chexing();
jiage();
genduo();
</script>

<style  scoped  lang="scss">
@import url("../assets/ershouche.css");
</style>