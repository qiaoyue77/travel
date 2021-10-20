<template>
  <div>
    <router-link to="/" tag="div" class="header-back" v-show="showHeaderBack">
      <span class="iconfont icon-back">&#xe624;</span>
    </router-link>
    <div class="header" v-show="!showHeaderBack" :style="opacityStyle">
      <router-link to="/"  class="header-left">
        <span class="iconfont header-left-back">&#xe624;</span>
      </router-link>
      上海-泰国
    </div>
  </div>


</template>

<script>
export default {
  name: "DetailHeader",
  data(){
    return {
      showHeaderBack:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  activated(){
    window.addEventListener('scroll', this.handleScroll, false)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      var top = document.documentElement.scrollTop;
      if(top > 50){
        var opacity = top / 100;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle.opacity = opacity;
        this.showHeaderBack = false;
      }else{
        this.showHeaderBack = true;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"
body{
  font-size:.28rem;
}
  .header-back{
    position absolute
    top 0
    left 0
    width:.8rem;
    height:.8rem
    text-align center;
    line-height .8rem;
    border-radius 50%;

    background-color rgba(0,0,0,.8);
  }
    .icon-back{
      display block
      color:#fff;
      font-size:.4rem;
    }
.header{
  position fixed;
  top:0;
  left:0;
  right:0;
  height:.88rem;
  line-height :.88rem;
  text-align center;
  color #fff;
  background-color :$bgColor
  font-size .36rem;

}
  .header-left{
    position absolute
    top:0;
    left 0
    display inline-block
    width .8rem
    height .8rem
    color:#fff;
  }
</style>
