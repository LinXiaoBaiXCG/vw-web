<template>
    <div>
      <!--LOGO-->
      <van-cell-group>
      <van-cell>
        <div align="center">
        <img src="../assets/logo_1.png">
        </div>
      </van-cell>
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
      <van-cell>
      <van-button plain type="info" size="mini" style="margin-left: 40px" to="register">注册</van-button>
      <van-button plain type="info" size="mini" style="margin-right: 40px;float: right" @click="doUpdatePassword">忘记密码？</van-button>
      </van-cell>
      <!--登录按钮-->
<!--      <van-cell>-->
        <van-button type="primary" size="large" @click="doLogin">登录</van-button>
<!--      </van-cell>-->
      <!--分割线-->
        <van-divider>其他方式登录</van-divider>
      <!--微信-->
      <van-cell>
        <img src="../assets/weixin.png" style="margin: 20px 120px 10px 20px" @click="wxLogin">
      </van-cell>
      </van-cell-group>
    </div>
</template>

<script>
  import { Field,Button,Notify,CellGroup,Cell,Divider } from 'vant';
  import { wxLogin,login } from '@/api/login';
  import { setToken } from '@/utils/auth';
    export default {
      name: "login",
      components: {
        [Field.name]: Field,
        [Button.name]: Button,
        [Notify.name]: Notify,
        [CellGroup.name]: CellGroup,
        [Cell.name]: Cell,
        [Divider.name]: Divider
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
              setToken(res)
              this.$router.push("/my")
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

</style>
