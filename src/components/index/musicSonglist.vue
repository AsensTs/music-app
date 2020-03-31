<template>
  <div class="music-songlist mglr30">
    <div class="songlist-title"><h3>热门歌单推荐</h3></div>
    <div class="songlist-content">
      <ul class="songlist-ul">
        <li class="songlist-li">
          <div class="li-left">
            <img
              class="li-left-img"
              src="../../assets/images/songlist/109951164795342466.jpg" />
          </div>
          <div class="li-right">
            <h3 class="right-title">浅喜似苍狗，深爱如长风</h3>
            <p class="right-disc">所爱隔山海，愿山海可平</p>
          </div>
        </li>
        <li class="songlist-li">
          <div class="li-left">
            <img
              class="li-left-img"
              src="../../assets/images/songlist/109951164795342466.jpg" />
          </div>
          <div class="li-right">
            <h3 class="right-title">浅喜似苍狗，深爱如长风</h3>
            <p class="right-disc">所爱隔山海，愿山海可平</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="stylus" scoped>
h3
  display: block
  font-size: 36px
  font-weight: bold
.music-songlist
  margin-top: 30px
  .songlist-title
    height: 80px
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 30px
    h3
      text-align: center
  .songlist-content
    .songlist-ul
      .songlist-li
        display: flex
        margin-bottom: 50px
        .li-left
          width: 150px
          height: 150px
          overflow: hidden
          .li-left-img
            width: 150px
            height: 150px
            border-radius: 12px
        .li-right
          width:500px
          padding-left: 50px
          .right-title
            margin-top: 25px
          .right-disc
            color: #7e8c8d
            margin-top: 35px
            font-size: 32px
</style>
