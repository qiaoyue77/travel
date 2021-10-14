<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
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
// swiper options example:
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[
        {
          id:'001',
          imgUrl:'https://img2.baidu.com/it/u=624305276,3006357768&fm=26&fmt=auto'
        },
        {
          id:'002',
          imgUrl:'https://img0.baidu.com/it/u=448111598,3713050274&fm=15&fmt=auto'
        },
        {
          id:'003',
          imgUrl:'https://img0.baidu.com/it/u=3005373703,3971702792&fm=26&fmt=auto'
        }
      ]

    }
  },

}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active{
  background-color :red;
}
.wrapper{
  width:100%;
  /*height :0;
  padding-bottom:26.67%;*/
  background-color :#eee;
  /*overflow: hidden;*/

}
.swiper-img{
  width:100%;
  height:100%;
}
</style>
