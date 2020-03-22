<template>
  <div class="home">
    <music-header></music-header>
  </div>
</template>

<script>
// @ is an alias to /src
import musicHeader from "../components/header/musicHeader";

export default {
  name: "Header",
  components: {
    musicHeader
  }
};
</script>
