<template>
<div>
  <city-header></city-header>
  <city-list :hot-cities="hotCities" :cities = "cities"></city-list>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import axios from 'axios'
export default {
  name: "City",
  components:{
    CityHeader,
    CityList
  },
  data(){
    return {
      cities:{},
      hotCities:[]
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/static/mock/city.json')
      .then(this.getInfoSuccess)
    },
    getInfoSuccess(res){
      var data = res.data.data;
      this.hotCities = data.hotCities
      this.cities = data.cities;

    }
  },
  mounted:function (){
    this.getCityInfo();
  }
}
</script>

<style scoped>

</style>
