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
  import { getToken } from '@/utils/auth'
    export default {
      name: "my",
      components:{
        tabbar: Tabbar,
        search: Search
      },
      created() {
        //验证是否登录
        if (getToken()){
          this.$router.replace("/my")
        } else{
          this.$router.replace("login")
        }
      }
    }
</script>

<style scoped>

</style>
