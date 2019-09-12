<template>
  <v-toolbar dark color="#303F9F">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Board For Everybody</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <!-- sign-up button -->
    <div v-if="!this.isLogin">
      <v-btn icon @click="setSignupModal">
        <v-icon>fa-user</v-icon>
      </v-btn>
    </div>

    <!-- login button -->
    <div v-if="!this.isLogin">
      <v-btn icon @click="setLoginModal">
        <v-icon>fa-sign-in-alt</v-icon>
      </v-btn>
    </div>

    <!-- post button -->
    <div v-if="this.isLogin">
      <v-btn icon @click="goToWrite">
        <v-icon>fa-pencil-alt</v-icon>
      </v-btn>
    </div>

    <!-- logout button -->
    <div v-if="this.isLogin">
      <v-btn icon @click="sendLogout">
        <v-icon>fa-sign-out-alt</v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>


<script>
import AccountService from '../../services/AccountService'

export default {
  name: "Header",

  methods: {
    setLoginModal() {
      this.$store.commit('setLoginModal', true)
    },

    setSignupModal() {
      this.$store.commit('setSignupModal', true)
    },
    
    sendLogout() {
      let flag = confirm("정말 로그아웃 하시겠습니까")
      
      if(flag) {
        const response = AccountService.logoutRequest()
      }
    },

    goToWrite() {
      this.$store.commit('setWriteModal', true)
    }
  },

  computed: {
    isLogin() {
      return sessionStorage.getItem('isLogin')
    }
  }
  
}
</script>
