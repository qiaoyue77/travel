<template>
  <div class="gallery-container">
    <div class="img-wrapper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of imgLists" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--    <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props:{
    imgLists:{
      type:Array,
      default:function (){
        return [];
      }
    }
  },
  data(){
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true,
        paginationType:'fraction',
        observer:true,
        observerParent: true

      },
      swiperList:[
        {
          id:'003',
          imgUrl:'https://img0.baidu.com/it/u=3005373703,3971702792&fm=26&fmt=auto'
        },
        {
          id:'003',
          imgUrl:'https://img0.baidu.com/it/u=3005373703,3971702792&fm=26&fmt=auto'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
div{
  display flex;
}
.gallery-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 99;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color:#000;
}
.gallery-container >>> .swiper-container{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.gallery-container >>> .swiper-slide{
  flex-direction: column;
  justify-content: center;
}
  .swiper-pagination{
    text-align center;
    justify-content center;
    color:#fff;
  }
.img-wrapper{
  width:100%;
  background-color: #fff;
}
.img-wrapper img{
  width:100%;
}
</style>
