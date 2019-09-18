<template>
    <div>
      <!--LOGO-->
      <div align="center">
        <img src="../assets/logo_1.png" style="margin-top: 20px;margin-bottom: 20px">
      </div>
      <van-field
        v-model="form.phone"
        label="手机号码"
        left-icon="phone-o"
      />
      <van-field
        v-model="form.password"
        type="password"
        label="密码"
        left-icon="eye-o"
      />
      <div style="margin-top: 5px">
      <van-button plain type="info" size="mini" style="margin-left: 40px">注册</van-button>
      <van-button plain type="info" size="mini" style="margin-right: 40px;float: right">忘记密码？</van-button>
      </div>
      <div style="margin-top: 5px">
        <van-button type="primary" size="large">登录</van-button>
      </div>
      <!--分割线-->
      <div>
        <hr class="hr-line">
        <p style="float: left;color: #546a5e">其他方式</p>
        <hr class="hr-line">
      </div>
      <!--微信-->
      <div>
        <img src="../assets/weixin.png" style="margin-top: 20px;margin-bottom: 20px" @click="wxLogin">
      </div>
    </div>
</template>

<script>
  import { Field,Button } from 'vant';
  import { wxLogin } from '@/api/login';
    export default {
      name: "login",
      components: {
        [Field.name]: Field,
        [Button.name]: Button,
      },
      data() {
        return {
          form: {
            phone: '',
            password: ''
          }
        }
      },
      methods: {
        wxLogin(){
          wxLogin().then(res=>{

          })
        }
      }
    }
</script>

<style scoped>
  .hr-line{
    border: 1px #546a5e dashed;
    float: left;
    width: 40%;
    margin-top: 28px;
  }
</style>
