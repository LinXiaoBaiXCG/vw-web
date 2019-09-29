<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    font-size: 16px;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
  }
  ol,ul{
    padding-left: 20px;
  }
  ol li{
    list-style-type:decimal;
    list-style-position:inside;
  }
  ul li{
    list-style-type:disc;
    list-style-position:inside;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>
