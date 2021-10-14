<template>
  <div class="icons-wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon-box" v-for="(item, index) of page" :key="item.id">
            <div class="icon-img-box">
              <img :src="item.imgUrl" alt=""/>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--    <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
  </div>

</template>

<script>
export default {
  name: "HomeIcons",
  data(){
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[{
        id:'001',
        imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc:'景点门票'
      },
        {
          id:'002',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc:'酒店'
        },
        {
          id:'003',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc:'机票'
        },
        {
          id:'004',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
          desc:'火车票'
        },
        {
          id:'005',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc:'度假'
        },
        {
          id:'006',
          imgUrl:'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.pngg',
          desc:'海外酒店'
        },
        {
          id:'007',
          imgUrl:'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          desc:'低价机票'
        },
        {
          id:'008',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc:'景点门票'
        },
        {
          id:'009',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc:'景点门票'
        }
  ]
    }
  },
  computed:{
    pages:function (){
      var pages = [];
      this.swiperList.forEach(function (item, idx){
        var page = Math.floor(idx / 8);
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item);
      })

      return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"
@import "~@/assets/styles/mixin.styl"
.icons-wrapper{
  width :100%;
  height:0;
  padding-bottom:50%;
  background-color :#eee
}
.icons-wrapper .icon-box{
  position :relative;
  float: left;
  width :25%;
  height:0;
  padding-bottom :25%;

}
.icons-wrapper .icon-box  .icon-img-box{
    position :absolute;
  top:0;
  left:0;
  right :0;
  bottom:0.44rem;
  }
.icons-wrapper .icon-box  .icon-img-box img{
  display :block;
  height :90%;
  margin:0 auto;
}
.icons-wrapper .icon-box  .icon-desc{
    position :absolute;
  bottom:0;
  left:0;
  right:0;
  height:0.44rem;
  line-height:0,44rem;
  text-align :center;
 font-size:0.15rem;
  color :$darkTxt;
  ellipsis();
  }


</style>
