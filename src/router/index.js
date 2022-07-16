import { createRouter, createWebHashHistory } from 'vue-router'
const Index = () => import("../views/index.vue")
const Usedcar = () => import("../views/ershou.vue")
const Newcar = () => import("../views/xinche.vue")
const Usedfinance = () => import("../views/jinrong.vue")
const Usedservice = () => import("../views/fuwu.vue")
const Sellcar = () => import("../views/maiche.vue")
const Detail = () => import("../views/xiangqing.vue")


const routes = [
  {
    path: "/",
    redirect: "/index"
  }
  , {
    path: "/index",
    component: Index
  }, {
    path: "/usedcar",
    component: Usedcar
  }, {
    path: "/newcar",
    component: Newcar
  }, {
    path: "/usedservice",
    component: Usedservice
  }, {
    path: "/sellcar",
    component: Sellcar
  }, {
    path: "/usedfinance",
    component: Usedfinance
  }, {
    path: "/detail",
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
