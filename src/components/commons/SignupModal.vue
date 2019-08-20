<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent 
        max-width="600px">
        <v-card>
          <!-- header -->
          <v-card-title>
            <span class="headline">Signup</span>
          </v-card-title>
          
          <!-- input card -->
          <div v-if="dialog">
            <v-card-text @keyup.esc="setSignupModal" @keyup.enter="sendSignup">
              <v-container grid-list-md>
                <v-layout wrap>
                  
                    <v-flex xs12>
                      <v-text-field v-model="nickName" label="Nickname*" required autofocus></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="email" label="Email*" required></v-text-field>
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
            <v-btn color="blue darken-1" dark text @click="setSignupModal">Close</v-btn>
            <v-btn color="blue darken-1" dark text @click="sendSignup">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>


<script>
import AccountService from '../../services/AccountService'

export default {
  name: 'SignupModal',

  data() {
    return {
      nickName: '',
      email: '',
      password: '',
    }
  },

  computed: {
    dialog() {
      return this.$store.state.signupModal
    }
  },

  methods: {
    setSignupModal() {
      this.$store.commit('setSignupModal', false)
    },

    async sendSignup() {
      const signupBody = {
        username: this.nickName,
        email: this.email,
        password: this.password,
      }

      const response = await AccountService.signupRequest(signupBody)
    }
  }

}
</script>
