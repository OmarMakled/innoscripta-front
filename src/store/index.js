import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    loading(state, val) {
        state.loading = val
    },
  },
  getters: {
    loading(state) {
        return state.loading
    }
  }
})