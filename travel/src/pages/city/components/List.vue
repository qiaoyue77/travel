<template>
<div class="list" ref="listWrapper">
  <div>
    <div class="hot-cities" >
      <div class="hot-cts-title">热门城市</div>
      <ul class="clearfix">
        <li v-for="(item,index) in computedCities" :key="item.id"
            :class="item.borderType"
            @click="handleCityClick(item.name)">{{item.name}}</li>
      </ul>
    </div>
    <div class="alphabet-menu">
      <div class="alphabet-menu-title">字母排序</div>
      <ul class="clearfix">
        <li v-for="key in letters" :key="key" @click="handleLetterClick">{{key}}</li>

      </ul>
    </div>
    <div class="alphabet-list" v-for="(value, key) in cities" :key="key" :ref="key">
      <div class="alphabet-list-title">{{ key }}</div>
      <ul class="clearfix">
        <li v-for="item in value" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>

      </ul>

    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "CityList",
  props:{
    hotCities:Array,
    cities:Object,

  },
  data(){
    return {
      letter:'',
      scroll:null
    }
  },
  mounted:function (){
    this.$nextTick(() => {
      this.pageScroll();
      /*this.scroll = new BScroll(this.$refs.listWrapper,{
        click:true,
        scrollY: true,
      });*/
    })


  },
  computed:{
    computedCities: function (){
      var result = [];
      result = this.hotCities.map((item,index) => {
        item.order = (index +1);
        if(item.order === 1){
          item.borderType = ''
        }else if (item.order === 2 || item.order === 3){
          item.borderType = 'border-left'
        }else if (item.order % 3 === 1){
          item.borderType = 'border-top'
        }else{
          item.borderType = 'border-topLeft'
        }

        return item;

      })
      return result;
    },
    letters:function (){
      return [...Object.keys(this.cities)];
    }
  },
  methods:{
    pageScroll(){
      if(!this.scroll){
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.listWrapper,{
            click:true,
            scrollY: true,
          });
        })
      }else {
        this.scroll.refresh()
      }
    },
    handleLetterClick(e){
      this.letter = e.target.innerText;
    },
    handleCityClick(city){
      this.$store.dispatch('changeCityName', city);
      this.$router.push('/');
    },

  },
  watch:{
    letter:function (){
      var el = this.$refs[this.letter][0];
      this.scroll.scrollToElement(el)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"

.clearfix:after{
  content:"";
  display :block;
  clear :both;
}
div{
  box-sizing :border-box;
}
  .list{
    position:absolute;
    top:.92rem;
    left:0;
    width:100%;
    height:calc(100% - .92rem);
    overflow :hidden;
  }
.hot-cts-title,
.alphabet-list-title,
.alphabet-menu-title{
  padding:0 .2rem;
  height :.72rem;
  line-height :.72rem;
  background-color :#f5f5f5
}

.hot-cities{
  width:100%;
  height:4.32rem;
  .hot-cts-title{
    width:100%;
    height:.72rem;
    padding:0 .2rem;
    line-height :.72rem;
    font-size:.26rem;
    color:$darkTxt;
  }


}
.hot-cities li{
  float:left;
  width:33.33%;
  height:.9rem;
  line-height :.9rem;
  text-align center;
  font-size:.23rem;


}
  .alphabet-menu{
    height:5.0rem;
    margin:.3rem 0;
    .alphabet-menu-title{
      font-size:0.25rem;
    }
    li{
      float:left;
      width:16.67%;
      height:.9rem;
      line-height :.9rem;
      text-align :center;
      font-size:0.25rem;
    }
  }
.alphabet-list{
  .alphabet-list-title{
    font-size:0.25rem;
  }
  li{
    float:left;
    width:25%;
    height:.9rem;
    line-hegiht:.9rem;
    text-align center;
    font-size:0.25rem;
  }
}
  .border-left{
    border-left:1px solid #eee;

  }
.border-top{
  border-top:1px solid #eee;

}
.border-topLeft{
  border-left:1px solid #eee;
  border-top:1px solid #eee;
}
</style>
