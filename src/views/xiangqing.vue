<template>
  <div class="detail1" id="ershou1">
    <div class="detail-div detail-info">
      <div class="detail-info-left">
        <img :src="data.cover" alt="" id="left-imgurl" />
        <div class="left-imgs">
          <div class="imgs-div">
            <template v-for="item in imgs" :key="item">
              <img :src="item" alt="" />
            </template>
          </div>
          <div class="imgs-change">
            <img src="https://www.tf2sc.cn/static/img/zuo.png" alt="" />
          </div>
          <div class="imgs-change">
            <img src="https://www.tf2sc.cn/static/img/you.png" alt="" />
          </div>
        </div>
      </div>
      <div class="detail-info-right">
        <div class="info-carid">
          车架号
          <span>{{ data.carId }}</span>
        </div>
        <div class="info-title">{{ data.carName }}</div>
        <div class="info-detail">
          <div class="detail-item" style="width: 98px">
            <div>{{ datasj }}</div>
            <div class="item-title">上牌时间</div>
          </div>
          <div class="item-line"></div>
          <div class="detail-item">
            <div>{{ data.mileage }}万公里</div>
            <div class="item-title">公里数</div>
          </div>
          <div class="item-line"></div>
          <div class="detail-item">
            <div>{{ data.parameterVo?.carColor }}</div>
            <div class="item-title">车身颜色</div>
          </div>
          <div class="item-line"></div>
          <div class="detail-item">
            <div>{{ data.parameterVo?.gearbox }}</div>
            <div class="item-title">变速挡</div>
          </div>
          <div class="item-line"></div>
          <div class="detail-item">
            <div style="width: 64px">{{ data.parameterVo?.carTransfer }}L</div>
            <div class="item-title">排量</div>
          </div>
          <div class="detail-item">
            <div style="width: 98px">{{ data.parameterVo?.fuel }}L</div>
            <div class="item-title">燃油方式</div>
          </div>
          <div class="item-line"></div>
          <div class="detail-item">
            <div>{{ data.parameterVo?.emissionStandard }}</div>
            <div class="item-title">排放标准</div>
          </div>
          <div class="item-line"></div>
          <div class="detail-item">
            <div>{{ datacc }}L</div>
            <div class="item-title">出厂日期</div>
          </div>
          <div class="item-line"></div>
          <div class="detail-item">
            <div>{{ data.parameterVo?.carTransfer }}</div>
            <div class="item-title">过户次数</div>
          </div>
        </div>
        <div class="info-price">
          <span class="price1">{{ data.priceVo?.caHallPrice }}万</span>
          <span class="price2">新车价：{{ data.priceVo?.carNetPrice }}</span>
          <span class="price3">
            为您节约
            <span>{{ qianshu }} </span>万
          </span>
        </div>
        <div class="info-anjie">
          <div class="triangle"></div>
          <img src="https://www.tf2sc.cn/static/img/anjie.png" alt="" />
          <span>灵活按揭</span>
          <span class="anjie">
            首付
            <span>30%</span>
            月供
            <span>{{ data.priceVo?.monthlyRepayment }}元</span>
            ({{ data.priceVo?.mortgageNum }})期
          </span>
        </div>
        <div class="info-advisory">
          <button class="advisory-online online-consult">在线咨询</button>
          <button class="advisory-tel">联系电话</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import axios from "../reqst/http";

let ind = ref("");
let data = ref([]);
let imgs = ref([]);
let route = useRoute();
// 获取 路由参数
ind.value = route.query.num;
let get = () => {
  axios({
    url: `api/tfcar/car/basicInfo/${ind.value}`,
  }).then((res) => {
    console.log(res.data.data);
    data.value = res.data.data;
    imgs.value = res.data.data.photoVo.carousel.split(",");
  });
};
// 计算属性
let datasj = computed(() => {
  let data1 = new Date(data.value.dateOfRegistration);
  let year = data1.getFullYear();
  let month = data1.getMonth() + 1;
  return year + "年" + (month < 10 ? "0" + month : month) + "月";
});
let qianshu = computed(() => {
  let a =
    (data.value.priceVo?.carNetPrice - data.value.priceVo?.caHallPrice) * 1;
  if (isNaN(a)) {
    return "0";
  } else {
    return a.toFixed(1);
  }
});
let datacc = computed(() => {
  let data2 = new Date(data.value.parameterVo?.deliveryTime);
  let year = data2.getFullYear();
  let month = data2.getMonth() + 1;
  return year + "年" + (month < 10 ? "0" + month : month) + "月";
});

get();
</script>

<style scoped  lang="scss">
.detail1 {
  width: 100%;
  height: auto;
  box-shadow: 0px 2px 10px 0px rgb(170 170 216 / 40%);
  border-radius: 14px;

  padding-bottom: 30px;
  margin-bottom: 50px;
}
.detail-info {
  display: flex;
}
.detail-div {
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
.detail-info-left {
  width: 620px;
  height: 502px;
}
.detail-info-left > img {
  width: 600px;
  height: 400px;
  display: block;
  border: 1px solid #e4e6ee;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
}
.left-imgs {
  width: 602px;
  height: 80px;
  overflow: hidden;
  position: relative;
}
.detail-info-right {
  margin-left: 20px;
  color: #333333;
}
.info-carid {
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
}
.info-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 30px;
}
.info-detail {
  width: 623px;
  height: 138px;
  background: #f9f9f9;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 20px;
}
.detail-item {
  height: 44px;
  font-size: 16px;
  margin-bottom: 30px;
  width: 104px;
}
.item-title {
  font-size: 12px;
  color: #999999;
  margin-top: 4px;
}
.item-line {
  width: 1px;
  height: 44px;
  background: #f0f0f0;
  margin-right: 20px;
}

.imgs-div {
  display: flex;
}
.imgs-div > img {
  width: 116px;
  height: 78px;
  border-radius: 4px;
  border: 1px solid #e4e6ee;
  margin-right: 10px;
  display: block;
}
.info-price {
  margin-top: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.price1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  color: #e73424;
  margin-right: 10px;
}
.price2 {
  color: #666666;
  text-decoration: line-through;
  margin-right: 10px;
}
.price3 {
  font-weight: 600;
  color: #f5994f;
  font-weight: 600;
}
.info-anjie {
  width: 578px;
  height: 40px;
  background: linear-gradient(297deg, #fff8f3 0%, #ffede0 100%);
  margin-top: 12px;
  position: relative;
  display: flex;
  align-items: center;
}
.triangle {
  width: 0;
  height: 0;
  position: absolute;
  left: 10px;
  top: -14px;
  border: 7px solid transparent;
  border-bottom: 7px solid #ffede0;
}
.anjie {
  margin-left: 30px;
}
.anjie > span {
  color: #f5994f;
}
.info-advisory > button {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
}

.advisory-online {
  width: 140px;
  height: 48px;
  background: #3298fc;
  box-shadow: 0px 2px 16px 0px rgb(43 125 242 / 40%);
  border-radius: 4px;
}
.info-advisory > button {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
}

.advisory-tel {
  width: 278px;
  height: 48px;
  background: #2567ff;
  box-shadow: 0px 4px 16px 0px rgb(88 136 255 / 40%);
  border-radius: 4px;
  margin-left: 30px;
  cursor: inherit;
}
.detail-item {
  height: 44px;
  font-size: 16px;
  margin-bottom: 30px;
  width: 104px;
}
.item-title {
  font-size: 12px;
  color: #999999;
  margin-top: 4px;
}
button {
  cursor: pointer;
  border: none;
}
.info-advisory {
  margin-top: 68px;
}
</style>