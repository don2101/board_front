<template>
  <div>
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
            <span class="grey--text">{{ writer }}</span><br>
            <span>{{ content }}</span>
          </div>
        </v-card-title>
      </v-card>

  </div>
</template>


<script>
export default {
  name: "Post",

  props: {
    title: { type: String },
    content: { type: String },
    writer: { type: String },
    writtenDate: { type: String },
  },
    
  methods: {
    //
  },

  data() {
    return {
      //
    }
  },

}
</script>

