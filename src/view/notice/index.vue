<template>
    <div>
      <!--标签页-->
      <van-tabs v-model="active" sticky color="#1989FA">
        <van-tab title="通知">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            style="margin-bottom: 45px">
            <van-cell
              v-for="item in list"
              :key="item"
              :title="item"
              @click="lookDetails(item)"
            />
          </van-list>
        </van-tab>
        <van-tab title="私信">私信</van-tab>
      </van-tabs>
      <!--标签栏-->
      <tabbar/>
    </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import Search from '@/components/Search'
import { Tab, Tabs,List,Cell } from 'vant';
export default {
    components:{
      tabbar: Tabbar,
      search: Search,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [List.name]: List,
      [Cell.name]: Cell,
    },
    data() {
        return {
          active: '',
          list: [],
          loading: false,
          finished: false
        };
    },
    methods: {
      lookDetails(item){
        alert(item)
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    }
}
</script>
