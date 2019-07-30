<template>
  <v-layout class="mt-5" wrap>
    <v-flex v-for="i in postList.length" xs4>
      <Post
        :title="postList[i-1].title"
        :content="postList[i-1].content"
        :writer="postList[i-1].writer"
        :writtenDate="postList[i-1].updated_at">
      </Post>
    </v-flex>
  </v-layout>
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
