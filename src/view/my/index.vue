<template>
  <div>
  <!--搜索框-->
  <search/>
  <van-cell-group>
    <div align="center" style="padding-top: 15px">
    <van-uploader :after-read="afterRead">
    <van-image
      round
      width="10rem"
      height="10rem"
      fit="cover"
      :src="this.result.avatar"
    />
    </van-uploader>
    </div>

    <van-grid>
      <van-grid-item text="我的回答" >
        <template slot="icon">
          <span>{{this.result.answerCount}}</span>
        </template>
      </van-grid-item>
      <van-grid-item text="我的提问" @click="goMyProblem">
        <template slot="icon">
          <span>{{this.result.problemCount}}</span>
        </template>
      </van-grid-item>
      <van-grid-item text="关注的问题" >
        <template slot="icon">
          <span>12</span>
        </template>
      </van-grid-item>
      <van-grid-item text="关注的人" >
        <template slot="icon">
          <span>13</span>
        </template>
      </van-grid-item>
    </van-grid>
  </van-cell-group>
  <!--标签栏-->
  <tabbar/>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar';
  import Search from '@/components/Search';
  import { getUserInfo } from '@/api/user';
  import { Grid, GridItem, Uploader, Image, CellGroup } from 'vant';
    export default {
      name: "my",
      components:{
        tabbar: Tabbar,
        search: Search,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Uploader.name]: Uploader,
        [Image.name]: Image,
        [CellGroup.name]: CellGroup,
      },
      data() {
        return {
          result: {
          }
        }
      },
      created() {
        this.init()
      },
      methods: {
        //初始化用户信息
        init() {
          getUserInfo().then(res =>{
            this.result = res
          })
        },
        afterRead(file) {
          // 此时可以自行将文件上传至服务器
          console.log(file);
        },
        goMyProblem(){
          this.$router.push('/myProblem')
        }
      }
    }
</script>

<style scoped>

</style>
