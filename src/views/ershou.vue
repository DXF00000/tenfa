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
          <button id="buy-search-btn" @click="sszi">搜索</button>
        </div>
        <div class="buy-sift">
          <div class="buy-sift-div">
            <div class="sift-div-list">
              <div>品牌：</div>
              <!-- <p class="">不限</p> -->
              <p
                v-for="(item, i) in pq"
                :key="i"
                @click="pqd(item.id, i, item.brand)"
                :class="{ siftDivChecked: item.brand == num }"
              >
                {{ item.brand }}
              </p>
            </div>
          </div>
          <div class="sift-series-list buy-sift-div-mt">
            <div>车系：</div>
            <div class="series-list-div">
              <!-- class="siftDivChecked" -->
              <template v-for="(item, i) in aodi" :key="i">
                <p
                  @click="pqd3(item.id, i, item.series)"
                  :class="{ siftDivChecked: item.series == num3 }"
                  v-show="aaa"
                >
                  {{ item.series }}
                </p>
              </template>

              <!-- <p>宝马X4M</p> -->
            </div>
          </div>
          <div class="buy-sift-div">
            <div class="sift-div-list">
              <div>车型：</div>
              <!-- "sift-div-checked" -->
              <p
                v-for="(item, i) in cx"
                :key="i"
                @click="pqd1(item.id, i, item.abbreviation)"
                :class="{ siftDivChecked: item.abbreviation == num1 }"
              >
                {{ item.abbreviation }}
              </p>
            </div>
          </div>

          <div class="buy-sift-div">
            <div class="sift-div-list" style="margin: 18px 0 8px 0">
              <div>价格：</div>
              <!-- <p class="sift-div-checked">不限</p> -->
              <p
                v-for="(item, i) in jg"
                :key="item"
                @click="pqd2(item.id, i, item.label)"
                :class="{ siftDivChecked: item.label == num2 }"
              >
                {{ item.label }}
              </p>
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
                    <!-- <p class="sift-div-checked">不限</p> -->
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
                    <!-- <p class="sift-div-checked">不限</p> -->
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
                    <!-- <p class="sift-div-checked">不限</p> -->
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
                    <!-- <p class="sift-div-checked">不限</p> -->
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
                    <!-- <p class="sift-div-checked">不限</p> -->
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
                    <!-- <p class="sift-div-checked">不限</p> -->
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
                    <template v-for="(item, i) in qf" :key="i">
                      <!-- <p class="sift-div-checked">不限</p> -->
                      <p>
                        {{ item.label }}
                      </p>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sift-num" v-show="falg">
          <div class="sift-now-div">
            <span>当前筛选：</span>
            <div class="sift-now" v-for="(item, i) in guanjianzi" :key="i">
              <span>{{ item.name }}:</span>
              <template v-for="(item, i) in p1" :key="i">
                <span class="sift-now-text">{{ item.name }}</span>
              </template>

              <template v-for="(item, i) in p2" :key="i">
                <span class="sift-now-text">{{ item.name }}</span>
              </template>

              <template v-for="(item, i) in p3" :key="i">
                <span class="sift-now-text">{{ item.name }}</span>
              </template>

              <p class="sift-now-del" @click="del(i)"></p>
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
              <!-- <p >全部</p> -->
              <template v-for="(item, i) in yanxc" :key="i">
                <p @click="qdj(i)" :class="{ topleftchecked: i - 1 == nums }">
                  {{ item }}
                </p>
              </template>
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
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
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
let yanxc = ref(["全部", "严选车源", "腾发自营", "车主直售", "限时秒杀"]);
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
// 自己请求自己，用得参数
let sss = ref("");
let sszi = () => {
  storer.push({
    path: "/usedcar",
    query: {
      text: sss.value,
    },
  });
};
let falg = ref(false);
let guanjianzi = ref([]);
let p1 = ref([]);
let p2 = ref([]);
let p3 = ref([]);

onBeforeRouteUpdate((to, from) => {
  // 如果函数没有参数，他是不能跳得，所以得传递过去一个参数
  zj(1, to);
});
// 同路由跳转，调用得函数
let zj = (i, to) => {
  falg.value = true;
  if (route.query.text) {
    guanjianzi.value.splice(0, 1);
    p1.value.splice(0, 1);
  }
  guanjianzi.value.push({
    name: "关键字",
    index: guanjianzi.value.length - 1,
  });
  p1.value.push({
    name: to.query.text,
    index: guanjianzi.value.length - 1,
  });

  axios({
    url: `/api/tfcar/car/list?page=${i}&sort=
`,
    params: {
      carName: to.query.text,
    },
  }).then((res) => {
    data.value = res.data.data.content;
  });
};
// 点击删除小按钮
let del = (i) => {
  guanjianzi.value.splice(i, 1);
};
// 列表请求默认请求
let data = ref([]);

let currentPage = ref(1);

let get = (i, s = "") => {
  axios({
    url: `/api/tfcar/car/list?page=${i}&saleType=${s}`,
  }).then((res) => {
    data.value = res.data.data.content;
  });
};
// 路由跳转请求search=宝马
let route = useRoute();
// 列表搜索请求
let qqtz = (i) => {
  falg.value = true;
  guanjianzi.value.push({
    name: "关键字",
    index: guanjianzi.value.length - 1,
  });
  p1.value.push({
    name: route.query.text,
    index: guanjianzi.value.length - 1,
  });
  axios({
    url: `/api/tfcar/car/list?page=${i}&sort=
`,
    params: {
      carName: route.query.text,
    },
  }).then((res) => {
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
    data.value = res.data.data.content;
  });
};
// 页面初始化执行得渲染
if (Object.keys(route.query).length) {
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
// https://api.tf2sc.cn/api/tfcar/car/series300?brandId=7
// 获取车型
let aodi = ref([]);
let hqcxx = (id) => {
  axios({
    url: "/api/tfcar/car/series300",
    params: {
      brandId: id,
    },
  }).then((res) => {
    if (res.data.status == 200) {
      aodi.value = res.data.data.content;
      aodi.value.unshift({
        series: "不限",
      });
    }
  });
};

// 点击事件
//  guanjianzi.value.splice(0, 1);
//   leitext.value.splice(0, 1);
let cxi = ref([]);
let num = ref("不限");
let num1 = ref("不限");
let num2 = ref("不限");
let num3 = ref("不限");
let aaa = ref(true);
let a = ref([true]);

let pqd = (id, i, item) => {
  num.value = item;
  hqcxx(id);
  if (item == "不限") {
    aaa.value = false;
  } else {
    aaa.value = true;
  }
};
let pqd1 = (id, i, item) => {
  num1.value = item;
};
let pqd2 = (id, i, item) => {
  num2.value = item;
};
let pqd3 = (id, i, item) => {
  num3.value = item;
};
let nums = ref(-1);
// 点击下面 4 个标题
let qdj = (i) => {
  nums.value = i - 1;
  if (nums.value == -1) {
    get(1);
  } else {
    get(1, nums.value);
  }
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
let pq = ref([]);
// 品牌
let pingpai = () => {
  axios({
    url: "/api/tfcar/car/customSeries",
  }).then((res) => {
    pq.value = res.data.data[0].brands;
    pq.value.unshift({
      brand: "不限",
    });
  });
};
// 标题渲染
let cx = ref([]);
// 车型
let chexing = () => {
  axios({
    url: "/api/tfcar/car/model",
  }).then((res) => {
    cx.value = res.data.data.content;
    cx.value.unshift({
      abbreviation: "不限",
    });
  });
};
let jg = ref([]);
// 价格
let jiage = () => {
  axios({
    url: "/api/tfcar/car/price",
  }).then((res) => {
    jg.value = res.data.data;
    jg.value.unshift({
      label: "不限",
    });
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
    rylx.value.unshift({
      label: "不限",
    });
    pl.value.unshift({
      label: "不限",
    });
    qd.value.unshift({
      label: "不限",
    });
    qf.value.unshift({
      label: "不限",
    });
    bsx.value.unshift({
      label: "不限",
    });
    lc.value.unshift({
      label: "不限",
    });
    zws.value.unshift({
      label: "不限",
    });
  });
};
pingpai();
chexing();
jiage();
genduo();
</script>
<style  scoped  lang="scss">
.elul {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buy-body {
  width: 100%;
  height: auto;
}

.buy-div {
  width: 1200px;
  margin: 0 auto;
  height: auto;
}

.buy-search {
  width: 880px;
  height: 40px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  margin: 38px 0 20px 0;
  padding-left: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

#buy-search-input {
  height: 100%;
  width: 750px;
  line-height: 20px;
}

input {
  border: none;
  outline: none;
}

#buy-search-btn {
  width: 96px;
  height: 40px;
  background: #5685fe;
  box-sizing: border-box;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid #f0f0f0;
  color: #ffffff;
}

.buy-sift {
  width: 1200px;
  min-height: 290px;
  box-sizing: border-box;
  padding: 30px 20px 30px 20px;
  background: #ffffff;
  margin-bottom: 20px;
  font-size: 14px;
}

.buy-sift-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sift-div-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #333333;
}

.sift-div-list > p {
  margin-left: 20px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
  cursor: pointer;
}

.siftDivChecked {
  color: #ffffff;
  background-color: #5685fe;
  /* border-radius: 4px; */
}

.sift-series-list {
  display: flex;
}

.buy-sift-div-mt {
  margin-top: 30px;
  margin-bottom: 30px;
}

.series-list-div {
  display: flex;
  flex-wrap: wrap;
  width: 1030px;
}

.series-list-div > p {
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
  cursor: pointer;
}

.select-list > div p:hover {
  background-color: #5685fe;
  color: #ffffff;
}

.sift-price-div {
  width: 322px;
  height: 44px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2px;
  font-size: 14px;
}

.sift-price-in {
  display: flex;
  align-items: center;
}

.sift-price-in input {
  width: 90px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding-left: 14px;
}

.sift-price-in span {
  margin: 0 6px;
}

.price-in-btn {
  width: 68px;
  height: 40px;
  background: #f5f7fe;
  border-radius: 4px;
}

button {
  cursor: pointer;
  border: none;
}

.tfcar-select {
  width: 116px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 0 13px;
  position: relative;
  font-size: 14px;
  cursor: pointer;
}

.sift-div-list .tfcar-select {
  margin-left: 20px;
}

.tfcar-select {
  width: 116px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 0 13px;
  position: relative;
  font-size: 14px;
  cursor: pointer;
}

.tfcar-select span {
  line-height: 40px;
}

.tfcar-select i {
  float: right;
  background-image: url("https://www.tf2sc.cn/static/img/icon.png");
  background-position: -6px -5px;
  background-repeat: no-repeat;
  width: 14px;
  height: 7px;
  display: block;
  margin-top: 17px;
}

.select-list div > p {
  width: 100%;
  height: 34px;
  padding-left: 14px;
  line-height: 34px;
  display: inline-block;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: 12px;
}

.select-list > p:hover {
  background-color: #5685fe;
  color: #ffffff;
  display: block;
}

.tfcar-select:hover i {
  background-position: -28px -5px;
}

.tfcar-select:hover {
  border-color: #5685fe;
  border-radius: 4px 4px 0px 0px;
}

.tfcar-select:hover .select-list {
  box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
  border: 1px solid #5685fe;
  display: block;
}

.select-list {
  display: none;
  position: absolute;
  top: 39px;
  left: -1px;
  z-index: 1;
  min-width: 116px;
  max-height: 218px;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid transparent;
}

.sift-num {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 14px;
}

.sift-now-div {
  display: flex;
  align-items: center;
}

.sift-now {
  width: auto;
  padding: 0 10px;
  background-color: #ffffff;
  height: 34px;

  margin-right: 10px;
  display: flex;
  align-items: center;
}

.sift-now-text {
  color: #5685fe;
  margin-right: 10px;
  margin-left: 5px;
}

.sift-now p {
  width: 14px;
  height: 14px;
  background-image: url("https://www.tf2sc.cn/static/img/guanbi.png");
  background-size: 14px 14px;
  border: 1px solid transparent;
}

.sift-reset i {
  width: 14px;
  height: 14px;
  background-image: url("https://www.tf2sc.cn/static/img/shanchu.png");
  background-size: 14px 14px;
  display: inline-block;
  margin-right: 6px;
}

.sift-reset {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #666666;
  margin-left: 20px;
  margin-right: 30px;
}

.sift-list {
  width: 100%;
  height: auto;
  padding-bottom: 82px;
}

.sift-car-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
}

.car-top-left {
  margin-top: 11px;
}

.car-top-left p {
  font-size: 18px;
  line-height: 32px;
  font-weight: 600;
  padding-bottom: 6px;
  margin-right: 30px;
  display: inline-block;
}

.car-top-right {
  width: 307px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  margin-bottom: 13px;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.car-top-right p {
  display: block;
  width: 76px;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
}

.car-top-right span {
  display: inline-block;
  width: 1px;
  height: 20px;
  background: #f0f0f0;
}

.sift-car-body {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
}

.topleftchecked {
  color: #5685fe;
  border-bottom: 4px solid #5685fe;
  border-radius: 2px;
}

.top-right-checked {
  color: #5685fe;
}
</style>