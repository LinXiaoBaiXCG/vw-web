<template>
  <div>
    <van-search
      v-model="params.title"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="showSearchPopup"
    >
      <div slot="action" @click="showSearchPopup">搜索</div>
    </van-search>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '92%' }"
      :overlay="overlay"
    >
      <van-sticky :offset-top="50">
        <van-cell title="搜索结果:">
          <van-icon
            slot="right-icon"
            name="close"
            style="line-height: inherit;"
            @click="doClose"
            size="20"
          />
        </van-cell>
      </van-sticky>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        style="margin-bottom: 45px">
        <van-cell
          v-for="item in list"
          :key="item.id"
          @click="getAllAnswer(item.id)"
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
    </van-popup>
  </div>
</template>

<script>
  import { Search, Popup, Cell, Sticky, Icon, Toast, List } from 'vant';
  import {formatTime} from '@/utils/index';
  import {search} from '@/api/problem';
    export default {
      name: "Search",
      components: {
          [Search.name]:Search,
          [Popup.name]:Popup,
          [Cell.name]:Cell,
          [Sticky.name]:Sticky,
          [Icon.name]:Icon,
          [Toast.name]:Toast,
          [List.name]:List,
      },
      data() {
        return {
          show: false,
          overlay: false,
          loading: true,
          finished: false,
          list: [],
          params: {
            size: 20,
            current: 1,
            title: ''
          }
        }
      },
      methods: {
        showSearchPopup(){
          if (this.params.title === ''){
            Toast('请输入搜索关键词');
          } else {
            this.show = true
            this.params.current = 1
            this.onLoad()
          }
        },
        doClose(){
          this.show = false
        },
        formatTime,
        //列表加载
        onLoad() {
          setTimeout(() => {
            search(this.params).then(res => {
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

</style>
