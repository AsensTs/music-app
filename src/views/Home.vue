<template>
  <div class="home">
    <music-header></music-header>
    <music-Banner></music-Banner>
  </div>
</template>

<script>
// @ is an alias to /src
import musicHeader from "../components/header/musicHeader";
import musicBanner from "../components/banner/musicBanner";

export default {
  name: "Header",
  components: {
    musicHeader,
    musicBanner
  }
};
</script>
