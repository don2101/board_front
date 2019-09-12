<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="500">

      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">sdfsdf</span>
              </v-flex>
            </v-layout>
          </v-container>

        </v-img>

 

        <v-card-text>
          <div class="card-text">sdf</div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text dark
            >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  name: 'PostWrite',

  methods: {
    setLoginModal() {
      this.$store.commit('setWriteModal', false)
    },
  },
  
  computed: {
    dialog() {
      return this.$store.state.writeModal
    }
  }
  
}
</script>
