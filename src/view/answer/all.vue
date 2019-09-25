<template>
  <div>
  <!--搜索框-->
  <search/>
  <van-sticky>
  <van-cell>
    <template slot="title">
      <span class="custom-title">{{this.one.problemTitle}}</span><br/>
    </template>
    <template slot="label">
      <span class="custom-label">这里应该是简介</span>
    </template>
    <van-button plain type="info" size="mini" style="float: right"><van-icon name="plus" />关注</van-button>
  </van-cell>
  </van-sticky>
    <van-cell style="margin-top: 8px">
      <template slot="title">
        <span class="custom-title">全部</span>
      </template>
      <van-button plain type="info" size="mini" style="float: right"><van-icon name="edit" />写回答</van-button>
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
          style="margin-bottom: 8px"
        >
          <template slot="title">
            <van-icon :name="item.avatar" /><span class="lable">{{item.username}}</span><br/>
            <span class="custom-value">{{item.content}}</span>
          </template>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import Search from '@/components/Search'
  import {Cell, CellGroup, Icon,Button, PullRefresh, List, Sticky} from 'vant'
  import {list} from '@/api/answer'
    export default {
        name: "all",
      data() {
          return {
            active: '',
            one: {},
            list: [],
            loading: false,
            finished: false,
            isLoading: false,
            params: {
              type: 1,
              size: 2,
              current: 1,
              problemId: 1
            }
        }
      },
      components: {
        search: Search,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Icon.name]: Icon,
        [Button.name]: Button,
        [PullRefresh.name]: PullRefresh,
        [List.name]: List,
        [Sticky.name]: Sticky,
      },
      methods: {
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
