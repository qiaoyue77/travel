<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

<!--    多页面应用 请求对应的HTML文件
    首屏时间快
    SEO优化好 查看到所有代码
    每次切换比较慢
    单页面应用
    router-link
    seo差 nuxt.js

    minimum-scale=1.0;maximum-scale=1.0;user-scalable=no

    引入reset.css
    import './assets/styles/reset.css'
    border.css
    devicePixelRatio -> 像素比

    双击放大页面 -> 用户第一次点击 用户第二次点击
    点击跳转链接 第一次点击后等待 是否第二次点击
    300ms延迟
    fastclick.js

    iconfont
    -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
