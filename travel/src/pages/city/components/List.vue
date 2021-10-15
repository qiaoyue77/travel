<template>
<div class="list">
  <div>
    <div class="hot-cities">
      <div class="hot-cts-title">热门城市</div>
      <ul class="clearfix">
        <li>北京</li>
      </ul>
    </div>
    <div class="alphabet-menu"></div>
    <div class="alphabet-list"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "CityList"
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"
.clearfix:after{
  content:"";
  display :block;
  clear :both;
}
div{
  box-sizing :border-box;
}
.hot-cities{
  width:100%;
  height:4.32rem;
  .hot-cts-title{
    width:100%;
    height:.72rem;
    padding:0 .2rem;
    line-height :.72rem;
    font-size:.26rem;
    color:$darkTxt;
  }


}
.hot-cities li{
  float:left;
  width:33.33%;
  height:.9rem;
  line-height :.9rem;
  text-align center;
  font-size:.23rem;
  background-color :orange;

}
</style>
