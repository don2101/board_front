<template>
  <div>
    <v-card height="400px">
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
        <PostModal
          :title="title"
          :content="content"
          :writer="writer"
          :writtenDate="writtenDate"></PostModal>
      </v-card-actions>
    </v-card>

  </div>
</template>


<script>
import PostModal from './PostModal'
export default {
  name: "Post",
  components: {
    PostModal,
  },
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

<style>
.card-text {
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 글자 단위로 자른다 */
  word-wrap: break-word;
  /* 여백 삽입 및 유연한 높이 증가 */
  display: -webkit-box;
  /* 보여줄 줄 수 */
  -webkit-line-clamp: 3;
  /* 플렉스 방향 설정 */
  -webkit-box-orient: vertical;
}
</style>
