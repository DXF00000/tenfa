<template>
  <div class="navigate">
    <div class="navigate-main">
      <div class="navigate-left">
        <router-link to="/" class="logo">
          <img src="@/assets/腾发.png" alt="" />
        </router-link>
        <img src="@/assets/定位.png" alt="" class="location" />
        <div>全国</div>
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
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
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

    return {
      navList,
    };
  },
};
</script>

<style lang="scss" scoped>
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