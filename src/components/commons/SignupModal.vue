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
            <v-card-text @keyup.esc="setSignupModal">
              <v-container grid-list-md>
                <v-layout wrap>
                  
                    <v-flex xs12>
                      <v-text-field label="Nickname*" required autofocus></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Email*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Password*" type="password" required></v-text-field>
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
            <v-btn color="blue darken-1" dark text @click="setSignupModal">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>


<script>
export default {
  name: 'SignupModal',

  computed: {
    dialog() {
      return this.$store.state.signupModal
    }
  },

  methods: {
    setSignupModal() {
      this.$store.commit('setSignupModal', false)
    }
  }

}
</script>
