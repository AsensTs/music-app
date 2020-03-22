<template>
  <div class="m-header">
    <div class="m-header-logo"><img :src="headerLogoPic" /></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      headerLogoPic: require("@images/header/music-logo.png")
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/mixin.styl'
.m-header
  height: 50px;
  vertical-center()
  .m-header-logo
    width: 32px
    margin-left: 20px
    img
      height: 35px
</style>
