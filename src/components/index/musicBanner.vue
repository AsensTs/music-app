<template>
  <div class="music-banner mglr30" v-swiper:mySwiper="swiperOption">
    <ul class="banner-ul swiper-wrapper">
      <li
        class="banner-li swiper-slide"
        v-for="banner in banners"
        :key="banner.id"
      >
        <img :src="banner.src" />
      </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // eslint-disable-next-line prettier/prettier
      banners: [
        { id: 1, src: require("@images/banner/banner1.jpg") },
        { id: 2, src: require("@images/banner/banner2.jpg") },
        { id: 3, src: require("@images/banner/banner3.jpg") },
        { id: 4, src: require("@images/banner/banner4.jpg") }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.music-banner
  height: 267px
  margin-top: $mg10
  border-radius: 15px
  overflow: hidden
  .banner-ul
    .banner-li
      img
        height: 267px
</style>
