<template>
  <div>
    <music-banner></music-banner>
    <music-songlist></music-songlist>
  </div>
</template>

<script>
// @ is an alias to /src
import musicBanner from "./musicBanner";
import musicSonglist from "./musicSonglist";

export default {
  name: "Header",
  components: {
    musicBanner,
    musicSonglist
  }
};
</script>
