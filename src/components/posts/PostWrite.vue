<template>
  <div>
    <v-layout row justify-center>
      <v-dialog
          v-model="dialog" persistent
          width="500">

        <div v-if="dialog">
          <v-card @keyup.esc="setWriteModal">
            <v-container fill-height fluid>
              <v-flex xs12 align-end flexbox>
                <v-text-field
                  label="Title"
                  v-model="title"
                  autofocus
                  outline
                ></v-text-field>
              </v-flex>
            </v-container>

            <v-card-text>
              <v-textarea outline v-model="content">

              </v-textarea>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" dark text @click="setWriteModal">Close</v-btn>
              <v-btn color="blue darken-1" dark text @click="sendPost">Write</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-dialog>
    </v-layout>
  </div>
</template>


<script>
import AccountService from "../../services/PostService"
import PostService from '../../services/PostService'

export default {
  name: 'PostWrite',

  data() {
    return {
      title: "",
      content: "",
    }
  },
  
  computed: {
    dialog() {
      return this.$store.state.writeModal
    },
  },

  methods: {
    setWriteModal() {
      this.$store.commit('setWriteModal', false)
    },

    sendPost() {
      const body = {
        "title": this.title,
        "content": this.content,
        "token": sessionStorage.getItem("jwt")
      }

      PostService.postPost(body);
      this.setWriteModal();
    }
  },
  
}
</script>
