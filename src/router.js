import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Company from './views/Company.vue'
import Bill from './views/Bill.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/companies/',
      name: 'company',
      component: Company
    },
    {
      path: '/companies/:id',
      name: 'bill',
      component: Bill
    }
  ]
})
