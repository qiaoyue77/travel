<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiper-l="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: "Home",
  data:function (){
    return {
      swiperList:[]
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  methods:{
    getHomeInfo(){
      axios.get('/static/mock/index.json')
      .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      if(res.data.ret && res.data.data){
        var data = res.data.data;
        this.swiperList = data.swiperList;

      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
