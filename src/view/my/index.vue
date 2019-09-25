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
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    </van-uploader>
    </div>

    <van-grid>
      <van-grid-item text="我的回答" >
        <template slot="icon">
          <span>10</span>
        </template>
      </van-grid-item>
      <van-grid-item text="我的提问" >
        <template slot="icon">
          <span>11</span>
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
  import { getToken } from '@/utils/auth';
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
            avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
          },
          fileList: [
            { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
            // // Uploader 根据文件后缀来判断是否为图片文件
            // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            // { url: 'https://cloud-image', isImage: true }
          ]
        }
      },
      created() {
        //验证是否登录
        if (getToken()){
          this.$router.replace("/my")
        } else{
          this.$router.replace("login")
        }
      },
      methods: {
        afterRead(file) {
          // 此时可以自行将文件上传至服务器
          console.log(file);
        }
      }
    }
</script>

<style scoped>

</style>
