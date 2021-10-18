<template>
<div class="list">
  <div>
    <div class="hot-cities">
      <div class="hot-cts-title">热门城市</div>
      <ul class="clearfix">
        <li>北京</li>
      </ul>
    </div>
    <div class="alphabet-menu">
      <div class="alphabet-menu-title">字母排序</div>
      <ul class="clearfix">
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
      </ul>
    </div>
    <div class="alphabet-list">
      <div class="alphabet-list-title">A</div>
      <ul class="clearfix">
        <li>阿拉</li>
        <li>阿拉</li>
        <li>阿拉</li>
        <li>阿拉</li>
        <li>阿拉</li>
      </ul>
    </div>
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
.hot-cts-title,
.alphabet-list-title,
.alphabet-menu-title{
  padding:0 .2rem;
  height :.72rem;
  line-height :.72rem;
  background-color :#f5f5f5
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
  .alphabet-menu{
    height:5.0rem;
    margin:.3rem 0;
    .alphabet-menu-title{
      font-size:0.25rem;
    }
    li{
      float:left;
      width:16.67%;
      height:.9rem;
      line-height :.9rem;
      text-align :center;
      font-size:0.25rem;
    }
  }
.alphabet-list{
  .alphabet-list-title{
    font-size:0.25rem;
  }
  li{
    float:left;
    width:25%;
    height:.9rem;
    line-hegiht:.9rem;
    text-align center;
    font-size:0.25rem;
  }
}
</style>
