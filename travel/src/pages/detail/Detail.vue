<template>
  <div>
    <Banner></Banner>
    <detail-header></detail-header>
    <div class="content-box">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: "Detail",
  components:{
    Banner,
    DetailHeader,
    DetailList
  },
  data(){
    return{
      list:[
        {
          title:'促销',
          children:[
            {
              title:'峨眉山一日游'
            },
            {
              title:'峨眉山一日游'
            },
            {
              title:'峨眉山一日游'
            },
          ]
        },
        {
          title:'门票'
        },
        {
          title:'金顶索道'
        },
        {
          title:'万年寺索道'
        },
        {
          title:'观光车'
        }

      ]
    }
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
