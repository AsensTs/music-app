<template>
  <div class="home">
    <music-header></music-header>
  </div>
</template>

<script>
// @ is an alias to /src
import musicHeader from "@/components/musicHeader.vue";

export default {
  name: "Home",
  components: {
    musicHeader
  }
};
</script>
