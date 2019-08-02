<template>
  <v-dialog
      v-model="dialog"
      width="500"
    >
    <template v-slot:activator="{ on }">
      <v-btn
        color="red lighten-1"
        dark
        v-on="on"
      >
        Detail
      </v-btn>
    </template>

    <v-card>
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
        
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{ title }}</span>
            </v-flex>
          </v-layout>
        </v-container>

      </v-img>

      <v-card-title>
        <div>
          <span class="grey--text">{{ writtenDate }}</span><br>
          <span>{{ writer }}</span>
        </div>
      </v-card-title>

      <v-card-text max-height="100px">
        <div class="card-text">{{ content }}</div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red"
          text dark
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: 'PostModal',

  props: {
    title: { type: String },
    content: { type: String },
    writer: { type: String },
    writtenDate: { type: String },
  },

  data() {
    return {
      dialog: false,
    }
  },
  
}
</script>
