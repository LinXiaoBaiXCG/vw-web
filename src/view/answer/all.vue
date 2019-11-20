<template>
  <div>
  <!--搜索框-->
  <search/>
  <van-sticky>
  <van-cell>
    <template slot="title">
      <span class="custom-title">{{one.problemTitle}}</span><br/>
    </template>
    <template slot="label">
      <span class="custom-label">{{one.problemDetails}}</span>
    </template>
    <!--<template slot="right-icon">-->
      <!--<van-button plain type="info" size="mini" style="float: right"><van-icon name="plus" style="line-height: inherit;"/>关注</van-button>-->
    <!--</template>-->
  </van-cell>
  </van-sticky>
    <van-cell style="margin-top: 8px">
      <template slot="title">
        <span class="custom-title">全部  {{total}}</span>
      </template>
      <template slot="right-icon">
        <van-button plain type="info" size="mini" style="float: right" @click="doEdit"><van-icon name="edit" style="line-height: inherit;"/>写回答</van-button>
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
          style="margin-bottom: 8px"
        >
          <template slot="title">
            <van-icon :name="item.avatar" /><span class="lable">{{item.username}}</span><br/>
            <span class="custom-value">{{filterHtmlTag(item.content)}}</span>
          </template>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import Search from '@/components/Search';
  import {Cell, CellGroup, Icon,Button, PullRefresh, List, Sticky} from 'vant';
  import {list} from '@/api/answer';
  import {filterHtmlTag} from '@/utils';
    export default {
      name: "all",
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
      data() {
          return {
            active: '',
            one: {},
            list: [],
            total: '',
            loading: false,
            finished: false,
            isLoading: false,
            params: {
              type: 1,
              size: 10,
              current: 1,
              problemId: ''
            }
        }
      },
      created() {
        this.$nextTick(() => {
          this.params.problemId = this.$route.query.problemId
        })
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
              let resultList = res.records;
              this.total = res.total;
              if (resultList.length > 0) {
                this.finished = false;
                if (this.params.current == 1){
                  this.list = '';
                  this.list = resultList;
                  //返回一条数据用户渲染标题和简介
                  // TODO 该逻辑需优化
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
        //写回答
        doEdit(){
          this.$router.push({
            name: "answer",
            query: {
              problemId: this.one.problemId,
              problemTitle: this.one.problemTitle
            }
          })
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
