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
      <van-button plain type="info" size="mini" style="float: right"><van-icon name="plus" />关注</van-button>
    </van-cell>
      <van-cell :value="this.result.content"></van-cell>
    </van-cell-group>
    <van-cell class="footer">
      <template slot="label">
        <span class="custom-label">这里应该是底部</span>
      </template>
      <van-button v-if="result.isAgree === 0" plain type="info" size="mini" @click="doAgree( 1)"><van-icon name="good-job" />赞同{{this.result.agreeCount}}</van-button>
      <van-button v-if="result.isAgree === 1" type="info" size="mini" @click="doAgree(2)"><van-icon name="good-job" />已赞同{{this.result.agreeCount}}</van-button>
    </van-cell>
  </div>
</template>

<script>
  import Search from '@/components/Search'
  import {Cell, CellGroup, Icon,Button } from 'vant'
  import {details, agree} from '@/api/answer'
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
        result: {}
      }
    },
    created() {
      this.$nextTick(() => {
        let id = this.$route.query.id
        this.getDetails(id)
      })
    },
    methods: {
      //初始化回答信息
      getDetails(id) {
        details(id).then(res => {
          this.result = res
        })
      },
      getAllProblem(problemId){
        alert("查询"+this.result.problemId+"成功!");
      },
      //点赞回答
      doAgree(type){
        let params = {uuid: this.result.uuid,
                      type: type,
                      userId: 1 }
        agree(params).then(res =>{
          alert("点赞成功！")
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
