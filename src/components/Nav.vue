<template>
  <div class="navigate">
    <div class="navigate-main">
      <div class="navigate-left">
        <router-link to="/" class="logo">
          <img src="@/assets/腾发.png" alt="" />
        </router-link>
        <img src="@/assets/定位.png" alt="" class="location" />
        <div @click="flag = true">{{ $store.state.name }}</div>
        <!-- 地址 -->
        <div class="dingwei" v-show="flag">
          <p class="city-top">选择城市</p>
          <div class="txhz">
            <div class="left">
              <p>#</p>
              <p v-for="(item, key) in data1" :key="item" @click="gundong(key)">
                {{ item }}
              </p>
            </div>
            <div class="right">
              <div class="city-list-item">
                <p class="city-item-title">#</p>

                <div class="city-item-list">
                  <p>全国</p>
                </div>
              </div>

              <div class="city-list-item">
                <template v-for="(item, key) in data" :key="item">
                  <p class="city-item-title" :ref="setbtnarr">
                    {{ key }}
                  </p>
                  <div class="city-item-list">
                    <p
                      v-for="(item, i) in data[key]"
                      :key="i"
                      @click="huoqu(item.name, i)"
                      :class="{ yanse1: item.name == quan }"
                    >
                      {{ item.name }}
                    </p>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="city-bottom">
            <button id="city-confirm" @click="ding">确定</button>
            <button id="city-cancel" @click="flag = false">取消</button>
          </div>
        </div>
      </div>
      <div class="navigate-right">
        <template v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path" active-class="right-active">{{
            item.text
          }}</router-link>
        </template>
        <div class="phone">
          咨询电话
          <span>400-0606-777</span>
        </div>
      </div>
    </div>
    <div id="mode" v-show="flag"></div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import store from "@/store";
export default {
  setup() {
    let quan = ref("");
    let navList = ref([
      {
        text: "首页",
        path: "/index",
      },
      {
        text: "二手车",
        path: "/usedcar",
      },
      {
        text: "新车",
        path: "/newcar",
      },
      {
        text: "卖车",
        path: "/sellcar",
      },
      {
        text: "腾发金融",
        path: "/usedfinance",
      },
      {
        text: "腾发服务",
        path: "/usedservice",
      },
    ]);
    let data = ref([]);
    let data1 = ref([]);
    let flag = ref(false);

    let btnArr = [];
    let setbtnarr = (el) => {
      btnArr.push(el);
    };
    // 左侧得楼层滚动
    let gundong = (key) => {
      btnArr[key].scrollIntoView();
    };
    let huoqu = (key) => {
      quan.value = key;
    };
    const body = window.document.getElementsByTagName("body")[0];
    let store = useStore();
    // 确定按钮
    let ding = () => {
      if (quan.value != "") {
        flag.value = false;

        store.commit("add", quan.value);
      } else {
        flag.value = false;
      }
    };

    // 全国数据
    let get = () => {
      axios({
        url: "/static/static/lib/citytest.json",
      }).then((res) => {
        data.value = res.data;
        data1.value = Object.keys(res.data);
      });
    };

    get();
    // 监听 然后禁用滚动条
    watch(flag, (newval, oldval) => {
      if (newval) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    });
    return {
      navList,
      data,
      flag,
      data1,
      quan,
      gundong,
      huoqu,
      ding,
      setbtnarr,
    };
  },
};
</script>

<style lang="scss" scoped>
.yanse1 {
  color: rgb(22, 155, 231);
}
.city-bottom {
  width: 900px;
  height: 76px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -2px 6px 0px rgb(0 18 103 / 7%);
  border: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
}
#city-cancel {
  width: 72px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  color: #666666;
  cursor: pointer;
}
#city-confirm {
  width: 72px;
  height: 40px;
  background: #5685fe;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  margin-right: 20px;
  cursor: pointer;
}
#mode {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  z-index: 99;
  top: 0;
}
.city-item-title {
  padding-left: 20px;
  width: 861px;
  height: 24px;
  box-sizing: border-box;
  background: #eff2f9;
  opacity: 0.5;
}

.city-item-list {
  width: 861px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.city-item-list p {
  width: 205px;
  padding: 7px 20px;
  cursor: pointer;
}
.txhz {
  display: flex;
}
.right {
  padding-left: 10px;
  width: 681%;
  height: 524px;
  overflow-y: auto;
  overflow-x: hidden;
}
.left {
  width: 38px;
  box-sizing: border-box;
  text-align: center;
  padding-top: 30px;
  font-size: 12px;
  color: #333333;
}
.left > p {
  width: 38px;
  height: 20px;
  line-height: 20px;
}
.city-top {
  width: 900px;
  height: 74px;
  box-sizing: border-box;
  padding: 0 30px;
  text-align: center;
  font-size: 20px;
  line-height: 74px;
  color: #333333;
}
.dingwei {
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 100;
  width: 900px;
  height: 674px;
  background: #ffffff;
}

.navigate {
  height: 70px;
  background-color: #fff;
  .navigate-main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    color: #333;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .navigate-left {
      display: flex;
      align-items: center;

      font-size: 14px;
      .logo {
        width: 130px;
        height: 42px;
        margin-right: 21px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .location {
        height: 14px;
        width: 14px;
        margin-right: 5px;
      }
      .address {
        cursor: pointer;
      }
    }

    .navigate-right {
      display: flex;

      .right-active {
        border-bottom: 2px solid #5685fe;
      }

      a {
        margin-right: 50px;
        padding: 12px 0;
        text-decoration: none;
        color: #333;
      }
      .phone {
        padding: 12px 0;
        span {
          color: #5685fe;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>