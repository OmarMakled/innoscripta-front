import axios from 'axios'
import Vuex from '@/store/index'
import toaster from '@/toaster'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API
});

instance.interceptors.request.use(function (config) {
	toaster.loading()
  Vuex.commit('loading', true)
  return config
}, function (error) {
    return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
	toaster.clear()
  Vuex.commit('loading', false)
  return response
  }, function (error) {
  	Vuex.commit('loading', false)
    return Promise.reject(error)
})

export default instance