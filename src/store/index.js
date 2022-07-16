import { createStore } from 'vuex'

export default createStore({
  state: {

    name: sessionStorage.name ? sessionStorage.name : "全国"
  },
  getters: {
  },
  mutations: {
    add(state, string) {
      state.name = string
      sessionStorage.setItem("name", string)
    }
  },
  actions: {
  },
  modules: {
  }
})
