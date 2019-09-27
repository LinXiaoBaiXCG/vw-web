<template>
  <div>
    <!--搜索框-->
    <search/>
    <van-cell-group style="margin-bottom: 40px">
    <van-cell>
      <template slot="title">
        <span class="custom-title">{{this.result.problemTitle}}</span><br/>
      </template>
      <template slot="label">
        <span class="custom-label" @click="getAllProblem()">查看全部{{this.result.problemCount}}个回答</span><van-icon name="arrow"/>
      </template>
    </van-cell>
    <van-cell>
      <template slot="title">
        <van-icon :name="this.result.avatar" style="float: left" size="45px"/>
        <span class="custom-title">{{this.result.username}}</span><br/>
      </template>
      <template slot="label">
        <span class="custom-label">{{this.result.introduction}}</span>
      </template>
      <template slot="right-icon">
        <van-button plain type="info" size="mini" style="float: right"><van-icon name="plus" style="line-height: inherit;"/>关注</van-button>
      </template>
    </van-cell>
      <van-cell :title="this.result.content">
        <template slot="label">
          <span class="label">编辑于:{{formatTime(this.result.updateTime,true)}}</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell class="footer">
      <template slot="icon">
      <van-button type="info" size="mini" @click="doAgree"><van-icon name="good-job" /> {{this.result.userIsAgree? '已赞同':'赞同'}} {{this.result.agreeCount}}</van-button>
      </template>
    </van-cell>
  </div>
</template>

<script>
  import Search from '@/components/Search';
  import {Cell, CellGroup, Icon,Button } from 'vant';
  import {details, agree} from '@/api/answer';
  import {formatTime} from '@/utils';
  export default {
    name: "detail",
    components: {
      search: Search,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
      [Button.name]: Button,
    },
    data() {
      return {
        userUuid: '',
        result: {
          isAgree: true
        }
      }
    },
    created() {
      this.$nextTick(() => {
        let id = this.$route.query.id
        this.getDetails(id)
      })
    },
    methods: {
      formatTime,
      //初始化回答信息
      getDetails(id) {
        details(id).then(res => {
          this.result = res
        })
      },
      //跳转至获取全部回答
      getAllProblem(){
        this.$router.push({
          name: "all",
          query: {
            problemId:this.result.problemId
          }
        })
      },
      //点赞回答
      doAgree(){
        let params = {uuid: this.result.uuid,
                      userIsAgree: !this.result.userIsAgree}
        agree(params).then(res =>{
          if (res.userIsAgree) {
            this.result.userIsAgree = res.userIsAgree;
            this.result.agreeCount = res.agreeCount
          }else{
            this.result.userIsAgree = res.userIsAgree;
            this.result.agreeCount = res.agreeCount
          }
        })
      }
    }
  }
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
}
</style>
