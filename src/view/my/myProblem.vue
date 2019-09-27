<template>
  <div>
  <van-cell>
    <template slot="title">
      <span class="custom-title">我的提问  {{this.total}}</span>
    </template>
    <van-button plain type="info" size="mini" style="float: right" @click="goAddProblem"><van-icon name="edit" />去提问</van-button>
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
        @click="getAllProblem(item.id)"
        style="margin-bottom: 8px"
      >
        <template slot="title">
          <van-icon :name="item.avatar" /><span class="custom-title">{{item.title}}</span><br/>
        </template>
        <template slot="label">
          <span class="custom-label">{{formatTime(item.updateTime,true)}}</span>
        </template>
      </van-cell>
    </van-list>
  </van-pull-refresh>
  </div>
</template>

<script>
  import {Cell, CellGroup, Icon,Button, PullRefresh, List} from 'vant';
  import {userProblem} from '@/api/problem';
  import {formatTime} from '@/utils/index';
    export default {
      name: "myProblem",
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
        formatTime,
        //列表加载
        onLoad() {
          setTimeout(() => {
            userProblem(this.params).then(res => {
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
        //去提问
        goAddProblem(){
          this.$router.push('/problem')
        },
        //跳转至获取全部回答
        getAllProblem(id){
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
