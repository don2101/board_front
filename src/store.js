import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    loginModal: false,
  },
  
  mutations: {
    setLoginModal(state, modal) {
      state.loginModal = modal;
    }
  }
})