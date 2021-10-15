<template>
  <div class="header">
    <router-link to="/"><span class="iconfont city-back">&#xe624;</span></router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"
.header{
  position:relative;
  width:100%;
  height:.88rem;
  line-height:.88rem;
  text-align:center;
  color :#fff;
  background-color :$bgColor;
  font-size:.32rem;
  .city-back{
    color:#fff;
    position :absolute;
    top:0;
    left:0.2rem;
  }
}
</style>
