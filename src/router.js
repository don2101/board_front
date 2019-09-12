import Vuerouter from 'vue-router'
import Vue from 'vue'

import Home from './views/Main.vue'

Vue.use(Vuerouter)

export default new Vuerouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]

})