<template>
  <v-layout class="mt-5">
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

  created() {
    this.getPostList()
  },
  
  methods: {
    getPostList() {
      this.postList = PostService.getPostList()
    }
  },

  data() {
    return {
      postList: [],
    }
  },

}
</script>


<style>

</style>
