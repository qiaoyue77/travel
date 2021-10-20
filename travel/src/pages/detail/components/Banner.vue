<template>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg" alt="">
    <div class="banner-info">
      <div class="banner-num">2754</div>
      <div class="banner-title">上海-泰国</div>
    </div>
    <common-fade>
      <common-gallery v-show="isGalleryShow" :img-lists="imgLists"></common-gallery>
    </common-fade>

  </div>

</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import CommonFade from 'common/fade/Fade'
export default {
  name: "Banner",
  components:{
    CommonGallery,
    CommonFade
  },
  data(){
    return {
      isGalleryShow:false,
      imgLists:[
        {
          id:'003',
          imgUrl:'https://img0.baidu.com/it/u=3005373703,3971702792&fm=26&fmt=auto'
        },
        {
          id:'001',
          imgUrl:'https://img0.baidu.com/it/u=3005373703,3971702792&fm=26&fmt=auto'
        }
      ]
    }
  },
  methods:{
    handleBannerClick(){
      this.isGalleryShow = !this.isGalleryShow;
    }
  }
}
</script>

<style scoped>
.banner{
  position: relative;
  width:100%;
  /*height:0;
  padding-bottom: 55%;*/
  background-color: #eee;
  font-size:.28rem;
}
.banner-img{
  width:100%;
}
.banner-info{
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  padding:0 .2rem;
  line-height: .6rem;
  color:#fff;
  background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.6))
}
.banner-title{
  font-size:.36rem;
}
.banner-num{
  width:1.2rem;
  height:.6rem;
  text-align: center;
  border-radius: .2rem;
  font-size:.24rem;
  background-color: rgba(0,0,0,.5);
}
</style>
