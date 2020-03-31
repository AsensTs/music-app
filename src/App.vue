<template>
  <div id="app">
    <vueHome></vueHome>
  </div>
</template>

<script>
import vueHome from "./views/Home";

export default {
  name: "app",
  components: {
    vueHome
  }
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
