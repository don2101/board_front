<template>
  <div>
    <Header />
    <PostList></PostList>
    <LoginModal></LoginModal>
    <SignupModal></SignupModal>

  </div>
</template>


<script>
import Header from '../components/commons/Header'
import PostList from '../components/posts/PostList'
import LoginModal from '../components/commons/LoginModal'
import SignupModal from '../components/commons/SignupModal'


export default {
  name: "Main",

  components: {
    Header,
    PostList,
    LoginModal,
    SignupModal
  },
  
}
</script>


