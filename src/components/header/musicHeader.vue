<template>
  <div class="m-header">
    <div class="m-header-logo"><img :src="headerLogoPic" /></div>
    <div class="m-header-nav">
      <ul class="m-nav-ul">
        <li class="m-nav-li" v-for="item in navData" :key="item.id">
          <a>{{ item.navName }}</a>
        </li>
      </ul>
    </div>
    <div class="m-header-mine">
      <span class="iconfont">&#xe63a;</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      headerLogoPic: require("@images/header/music-logo.png"),
      navData: [
        { id: 1, navName: "推荐" },
        { id: 2, navName: "歌手" },
        { id: 3, navName: "排行" },
        { id: 4, navName: "搜索" }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/mixin.styl'
.m-header
  height: 120px
  vertical-center()
  .m-header-logo
    width: 15%
    center()
    img
      height: 80px
  .m-header-nav
    width: 70%
    .m-nav-ul
      display: flex
      justify-content: space-around
      .m-nav-li
        text-align: center
        font-size: 36px
        font-weight: 200
        color: $color-text-l
  .m-header-mine
    width: 15%
    text-align: center
    .iconfont
      font-size: 38px;
      font-weight: bold
</style>
