<template>
  <div>
    <div class="recommend-title"><span class="iconfont">&#xe6bb;</span>猜你喜欢</div>
    <ul>
      <router-link
        to="/detail" tag="li"
        class="list-item" v-for="item of recommendList" :key="item.id">
        <div class="item-img">
          <img  :src="item.imgUrl" alt="">
        </div>

        <div class="item-info">
          <div class="inner-box">
            <div class="info-title">{{item.title}}</div>
            <div class="info-comment">
              <span class="iconfont icon-star">&#xe68b;</span>
              <span class="comment-num">{{ item.commentNum }}</span>
            </div>
            <div class="info-price">
              <span class="price">￥<em>{{ item.price }}</em></span>起
              <p class="district">{{ item.price }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>

</template>

<script>
export default {
  name: "HomeRecommend",
  data:function (){
    return {
      recommendList:[
        {
          id:'001',
          imgUrl:'//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
          title:'上海-泰国',
          commentNum:2754,
          price:3128,
          district:'南区'
        },
        {
          id:'002',
          imgUrl:'//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          title:'上海-三亚',
          commentNum:204,
          price:1298,
          district:'南区'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/variable.styl"
@import "~@/assets/styles/mixin.styl"
.recommend-title{
  width:100%;
  height:0.8rem;
  line-height:0.8rem;
  font-size:0.3rem;
  padding:0 0.1rem;
}
  .list-item{
    display :flex;
    width:100%;
    height:2.4rem;

  }
  .item-img{
      width:2.4rem;
      height :2.4rem;
    padding:0.2rem;
      img{
        width :100%;
        height:100%;
      }
  }
  .item-img-tag{
      width:1.02rem;
    height:0.38rem;

  }
  .item-info{
      flex:1;
    min-width:0;
    padding:0.4rem 0.1rem;
    .inner-box{
      width:100%;
      height:100%;
      .info-title{
        width:100%;
        height:0.6rem;
        line-height:.6rem;
        font-size:0.32rem;
        ellipsis()
      }
      .info-comment{
        width:100%;
        height:.4rem;
        line-height:.4rem;
        font-size:.24rem;
        .icon-star{
          color:#ffe436
        }
        .comment-num{
          color:$lightTxtColor;
        }
      }
      .info-price{
        position:relative;
        width:100%;
        height:.6rem;
        line-height:.6rem;
        font-size:.3rem;
        color:$lightTxtColor;
        .price{
          color:#ff8300;
          em{
            font-size:.4rem;
          }

        }
        .district{
          position :absolute;
          bottom:0;
          right:.24rem;
        }
      }
    }
  }
</style>
