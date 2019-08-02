<template>
  <v-container grid-list-xl>
    <v-layout fill-height justify-space-around class="mt-5" row wrap>
      <v-flex v-for="(post, i) in postList" :key="i" xs4>
        <Post
          :title="post.title"
          :content="post.content"
          :writer="post.writer"
          :writtenDate="post.updated_at">
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
      activate: false,
    }
  },

  created() {
    this.getPostList()
  },

  methods: {
    async getPostList() {
      this.postList = await PostService.getPostList()
    },

    test() {
    }
  },
}
</script>


<style>

</style>
