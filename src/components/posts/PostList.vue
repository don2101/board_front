<template>
  <v-container grid-list-xl>
    <v-layout fill-height justify-space-around class="card-columns mt-5" row wrap>
      <v-flex v-for="i in postList.length" xs4>
        <Post
          :title="postList[i-1].title"
          :content="postList[i-1].content"
          :writer="postList[i-1].writer"
          :writtenDate="postList[i-1].updated_at">
        </Post>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import Post from "./Post"
import PostService from '../../services/PostService'

export default {
  name: "PostList",

  components: {
    Post,
  },

  data() {
    return {
      postList: [],
    }
  },

  created() {
    this.getPostList()
  },

  methods: {
    async getPostList() {
      this.postList = await PostService.getPostList()
    }
  },
}
</script>


<style>

</style>
