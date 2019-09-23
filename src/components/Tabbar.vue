<template>
  <div>
  <van-tabbar route>
    <van-tabbar-item
      replace
      to="/home"
      icon="label"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      icon="add"
      @click="doPopup"
    >
      操作
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/notice"
      icon="bell"
    >
      通知
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/my"
      icon="friends"
    >
      我的
    </van-tabbar-item>
  </van-tabbar>
    <van-popup v-model="show" position="bottom" :style="{ height: '22%' }">
      <van-cell title="提个问题" @click="goPopup('problem')"/>
      <van-cell title="回答问题" @click="goPopup('answer')"/>
      <van-cell title="取消" is-link arrow-direction="down" @click="cancle"/>
    </van-popup>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem,Popup,Cell,Dialog  } from 'vant';
  import { getToken } from '@/utils/auth';
    export default {
      name: "Tabbar",
      components: {
          [Tabbar.name]:Tabbar,
          [TabbarItem.name]:TabbarItem,
          [Popup .name]:Popup,
          [Cell .name]:Cell,
          [Dialog .name]:Dialog
      },
      data() {
        return {
          show: false,
        }
      },
      methods: {
        doPopup(){
          this.show = true
        },
        goPopup(type){
          if (getToken()) {
            if (type == "problem") {
              this.$router.push("/problem")
            }else if(type == "answer") {
              this.$router.push("/answer")
            }
          } else {
            this.show = false
            Dialog.confirm({
              message: '该操作需登录后才能执行，是否前往登录？'
            }).then(() => {
              this.$router.push("/login")
            }).catch(() => {
              Dialog.close()
            });
          }
        },
        cancle(){
          this.show = false
        }
      }
    }
</script>

<style scoped>

</style>
