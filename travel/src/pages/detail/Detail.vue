<template>
  <div>
    <Banner></Banner>
    <detail-header></detail-header>
    <div class="content-box"></div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import DetailHeader from './components/Header'
export default {
  name: "Detail",
  components:{
    Banner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
body{
  font-size:.28rem;
}
  .content-box{
    height:50rem;
  }
</style>
