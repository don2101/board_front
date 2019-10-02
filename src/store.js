import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    loginModal: false,
    signupModal: false,
    writeModal: false,
  },
  
  mutations: {
    setLoginModal(state, modal) {
      state.loginModal = modal;
    },

    setSignupModal(state, modal) {
      state.signupModal = modal;
    },
    
    setWriteModal(state, modal) {
      state.writeModal = modal;
    },
  }
})