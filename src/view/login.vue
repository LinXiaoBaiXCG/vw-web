<template>
    <div>
      <!--LOGO-->
      <div align="center">
        <img src="../assets/logo_1.png" style="margin-top: 30px;margin-bottom: 30px">
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
      <van-button plain type="info" size="mini" style="margin-left: 40px" @click="doRegister">注册</van-button>
      <van-button plain type="info" size="mini" style="margin-right: 40px;float: right" @click="doUpdatePassword">忘记密码？</van-button>
      </div>
      <!--登录按钮-->
      <div style="margin-top: 20px">
        <van-button type="primary" size="large" @click="doLogin">登录</van-button>
      </div>
      <!--分割线-->
      <div style="margin-top: 10px">
        <hr class="hr-line">
        <p style="float: left;color: #546a5e">使用其他方式登录</p>
        <hr class="hr-line">
      </div>
      <!--微信-->
      <div>
        <img src="../assets/weixin.png" style="margin: 20px 120px 10px 20px" @click="wxLogin">
      </div>
    </div>
</template>

<script>
  import { Field,Button,Notify } from 'vant';
  import { wxLogin,login } from '@/api/login';
    export default {
      name: "login",
      components: {
        [Field.name]: Field,
        [Button.name]: Button,
        [Notify.name]: Notify
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
            window.location.href = res.toString()
          })
        },
        doRegister(){
          this.$router.push("/register")
        },
        doLogin(){
          if (this.form.phone == ''){
            Notify({
              message: '请输入手机号码',
              duration: 2500
            });
          } else if (this.form.password == ''){
            Notify({
              message: '请输入密码',
              duration: 2500
            });
          }else {
            login(this.form).then(res =>{
              alert("登录成功！")
            })
          }
        },
        doUpdatePassword(){
          Notify({
            message: '测试环境暂时关闭',
            duration: 2500
          });
        }
      }
    }
</script>

<style scoped>
  .hr-line{
    border: 0.5px #000000 solid;
    float: left;
    width: 32%;
    margin-top: 28px;
  }
</style>
