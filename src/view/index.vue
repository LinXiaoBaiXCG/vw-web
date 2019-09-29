<template>
  <div>
    <!--搜索框-->
    <search/>
    <!--标签页-->
    <van-tabs v-model="active" sticky color="#1989FA">
      <van-tab title="关注">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          style="margin-bottom: 45px">
          <van-cell
            v-for="item in list"
            :key="item.id"
            @click="lookDetails(item.id)"
            style="margin-top: 8px"
          >
            <template slot="title">
              <span class="custom-title">{{item.problemTitle}}</span><br/>
              <van-icon :name="item.avatar" /><span class="lable">{{item.username}}</span><br/>
              <span class="custom-value">{{filterHtmlTag(item.content)}}</span>
            </template>
          </van-cell>
        </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="推荐">推荐</van-tab>
      <van-tab title="热门">热门</van-tab>
    </van-tabs>
    <!--标签栏-->
    <tabbar/>
  </div>
</template>
<script>
  import Tabbar from '@/components/Tabbar';
  import Search from '@/components/Search';
  import {Tab, Tabs, List, Cell, CellGroup, Icon, PullRefresh } from 'vant';
  import {list} from '@/api/answer';
  import {filterHtmlTag} from '@/utils';

  export default {
    name:"home",
    components: {
      tabbar: Tabbar,
      search: Search,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [List.name]: List,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
      [PullRefresh.name]: PullRefresh,
    },
    data() {
      return {
        active: 1,
        list: [],
        loading: false,
        finished: false,
        isLoading: false,
        params: {
          type: 1,
          size: 10,
          current: 1
        }
      };
    },
    methods: {
      //过滤HTML标签
      filterHtmlTag,
      //查看详情
      lookDetails(id) {
        //通过路由传参
        this.$router.push({
          name: "details",
          query: {
            id:id
          }
        })
      },
      //列表加载
      onLoad() {
        setTimeout(() => {
        list(this.params).then(res => {
          let resultList = res.records
          if (resultList.length > 0) {
            this.finished = false;
            if (this.params.current == 1){
              this.list = '';
              this.list = resultList;
            } else {
              this.list = this.list.concat(resultList);
            }
            this.params.current += 1;
          } else {
            this.finished = true;
          }
          this.loading = false;
        })
        }, 500);
      },
      //下拉刷新
      onRefresh() {
        this.params.current = 1;
        this.onLoad();
        this.isLoading = false;
      }
    }
  }
</script>

<style scoped>
.custom-title{
  font-weight: bold;
}
.custom-value{
  font-size: 11px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
