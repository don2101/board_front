import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import store from './store.js'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  store,
  Vuetify,
  render: h => h(App)
}).$mount('#app')
