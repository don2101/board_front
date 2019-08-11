<template>
  <div>
    <Header />
    <PostList></PostList>
    <LoginModal></LoginModal>

  </div>
</template>


<script>
import Header from '../components/commons/Header'
import PostList from '../components/posts/PostList'
import LoginModal from '../components/commons/LoginModal'


export default {
  name: "Main",

  components: {
    Header,
    PostList,
    LoginModal,
  },
  
}
</script>


