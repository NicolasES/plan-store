import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_API

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
})