import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import moment from 'moment'

import './assets/app.js'
import './assets/app.scss'

Vue.config.productionTip = false


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
