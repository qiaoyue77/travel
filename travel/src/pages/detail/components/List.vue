<template>
  <div>
    <div class="list-item "
         v-for="(item, index) of list" :key="index"
    >
      <div class="list-item-title border-bottom">
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props:{
    list:{
      type:Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-item{
  min-height .8rem

  font-size:.32rem
}
  .list-item-title{
    height .8rem
    line-height .8rem
    padding:0 .2rem
    font-size:.32rem
  }
    .item-children .list-item-title{
      padding:0 .4rem;
    }
</style>
