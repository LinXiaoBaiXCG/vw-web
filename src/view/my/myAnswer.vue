<template>
  <div>
    <van-cell>
      <template slot="title">
        <span class="custom-title">我的回答  {{total}}</span>
      </template>
    </van-cell>
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
  </div>
</template>

<script>
  import {Cell, CellGroup, Icon,Button, PullRefresh, List} from 'vant';
  import {getMyAnswer} from '@/api/answer';
  import {formatTime} from '@/utils/index';
  import {filterHtmlTag} from '@/utils';
  export default {
    name: "myAnswer",
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
      [Button.name]: Button,
      [PullRefresh.name]: PullRefresh,
      [List.name]: List,
    },
    data() {
      return {
        list: [],
        total: '',
        loading: false,
        finished: false,
        isLoading: false,
        params: {
          size: 10,
          current: 1,
        }
      }
    },
    methods: {
      filterHtmlTag,
      formatTime,
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
          getMyAnswer(this.params).then(res => {
            let resultList = res.records;
            this.total = res.total;
            if (resultList.length > 0) {
              this.finished = false;
              if (this.params.current == 1){
                this.list = '';
                this.list = resultList;
                //返回一条数据用户渲染标题和简介
                this.one = resultList[0];
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
      },
      //跳转至获取全部回答
      getAllAnswer(id){
        this.$router.push({
          name: "all",
          query: {
            problemId:id
          }
        })
      },
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
