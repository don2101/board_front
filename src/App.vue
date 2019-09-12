<template>
  <v-app>
    <div id="app">
      <Main />
    </div>
  </v-app>
</template>


<script>
import Main from './views/Main'
export default {
  name: 'app',
  
  components: {
    Main,
  }
}
</script>