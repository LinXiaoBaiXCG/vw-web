<template>
  <div>
    <!--搜索框-->
    <search/>
    <van-cell>
      <template slot="title">
        <van-icon :name="this.result.avatar" style="float: left" size="45px"/>
        <span class="lable">{{this.result.username}}</span><br/>
        <span class="lable">这里应该是简介</span>
      </template>
    </van-cell>
    <van-cell :title="this.result.problemTitle" :label="this.result.content" />
  </div>
</template>

<script>
  import Search from '@/components/Search'
  import {Cell, CellGroup, Icon} from 'vant'
  import {details} from '@/api/answer'
  export default {
    name: "details",
    components: {
      search: Search,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
    },
    data() {
      return {
        result: {}
      }
    },
    created() {
      this.$nextTick(() => {
        let id = this.$route.params.id
        this.getDetails(id)
      })
    },
    methods: {
      //初始化回答信息
      getDetails(id) {
        details(id).then(res => {
          this.result = res
        })
      }
    }
  }
</script>

<style scoped>

</style>
