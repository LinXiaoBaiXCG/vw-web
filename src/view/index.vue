<template>
    <div>
      <!--搜索框-->
      <search/>
<!--        <van-sticky>-->
<!--        <van-tabs v-model="active" animated>-->
<!--            <van-tab v-for="index in 4" :title="'选项 ' + home">-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--              内容 {{ home }}<br>-->
<!--            </van-tab>-->
<!--        </van-tabs>-->
<!--        </van-sticky>-->
        <router-view />
      <!--标签栏-->
      <tabbar/>
    </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import Search from '@/components/Search'
export default {
    components:{
      tabbar: Tabbar,
      search: Search
    },
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>
