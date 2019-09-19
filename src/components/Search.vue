<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
  import { Search } from 'vant'
    export default {
      name: "Search",
      components: {
          [Search.name]:Search
      },
      data() {
        return {
          value: ''
        }
      },
      methods: {
        onSearch(){
          alert("搜索成功！")
        }
      }
    }
</script>

<style scoped>

</style>
