<template>
  <div>
  <!--搜索框-->
  <search/>
  <h1>我的页面</h1>
  <!--标签栏-->
  <tabbar/>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar'
  import Search from '@/components/Search'
    export default {
      name: "my",
      components:{
        tabbar: Tabbar,
        search: Search
      }
    }
</script>

<style scoped>

</style>
