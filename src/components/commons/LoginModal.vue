<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent 
        max-width="600px">
        <v-card>
          <!-- header -->
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>
          
          <!-- input card -->
          <div v-if="dialog">
            <v-card-text @keyup.esc="setLoginModal" @keyup.enter="sendLogin">
              <v-container grid-list-md>
                <v-layout wrap>

                  <v-flex xs12>
                    <v-text-field v-model="nickname" label="nickname*" required autofocus></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
                  </v-flex>
                  
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
          </div>

          <!-- button group -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" dark text @click="setLoginModal">Close</v-btn>
            <v-btn color="blue darken-1" dark text @click="setLoginModal">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>


<script>
import AccountService from '../../services/AccountService'

export default {
  name: 'LoginModal',

  data() {
    return {
      nickname: '',
      password: '',
    }
  },

  computed: {
    dialog() {
      return this.$store.state.loginModal
    }
  },

  methods: {
    setLoginModal() {
      this.$store.commit('setLoginModal', false)
    },

    async sendLogin() {
      const loginBody = {
        username: this.nickname,
        password: this.password
      }
        
      const response = await AccountService.loginRequest(loginBody)

      if(response == false) {
        alert("아이디나 비밀번호가 잘못되었습니다.")
      } else {
        alert("로그인 되었습니다.")

        this.$store.commit('setLoginModal', false)
      }
    }
  }

}
</script>
