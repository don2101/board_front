<template>
  <div>
    <Header />

    <v-container>
      <PostList/>
    </v-container>
    <h1>hello world</h1>
  </div>
</template>


<script>
import Header from '../components/commons/Header'
import PostList from '../components/posts/PostList'

export default {
  name: "Main",

  components: {
    Header,
    PostList,
  },
  
}
</script>


