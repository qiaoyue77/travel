<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
    <div class="header-middle">
      <span class="iconfont search-icon">&#xe632;</span>
      <div class="kw">输入城市/景点/游玩主题</div>
      <input type="text" class="header-input"/>
    </div>
    <router-link to="/city" tag="div" class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe600;</span>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed:mapState(['city'])
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"
.header{
  display flex;
  width 100%;
  height:0.88rem;
  background-color:$bgColor;
  font-size:0.28rem;
  color:#fff;
  line-height :.88rem;
}
.header-left{
  width:.8rem;
  height 100%;
  text-align :center

}
  .header-middle{
    position: relative;
    flex :1;
    height :100%;
  }
.header-middle  .search-icon{
      position :absolute;
  top:.03rem;
  left:.2rem;
  color:#e4e7ea;
    }
.header-middle  .kw{
  position :absolute;
  top:0;
  left:.65rem;
      color:#e4e7ea;
    }
    .header-input{
      display :block;
      box-sizing :border-box;
      width:100%;
      height :.6rem;
      margin:0.14rem 0;
      padding:0;
      border:none;
      border-radius :0.06rem;
    }
.header-right{
  width:1.32rem;
  height 100%;
  text-align :center

}
</style>
