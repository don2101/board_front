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
          <v-card-text @keyup.esc="setLoginModal">
            <v-container grid-list-md>
              <v-layout wrap>

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
export default {
  name: 'LoginModal',

  computed: {
    dialog() {
      return this.$store.state.loginModal
    }
  },

  methods: {
    setLoginModal() {
      this.$store.commit('setLoginModal', false)
    }
  }

}
</script>
