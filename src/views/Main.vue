<template>
  <div>
    <Header />
    <PostList></PostList>
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


