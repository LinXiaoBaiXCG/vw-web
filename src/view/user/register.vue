<template>
  <div>
    <van-cell-group>
        <van-field
                v-model="form.username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
        />
        <van-field
                v-model="form.phone"
                required
                clearable
                label="手机号码"
                placeholder="请输入手机号码"
        />
        <van-field
                v-model="form.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                clearable
        />
        <van-field
                v-model="form.checkPassword"
                type="password"
                label="确认密码"
                placeholder="请再次输入密码"
                required
                clearable
        />
      <!--验证码-->
        <van-field v-model="form.code" label="验证码" placeholder="请输入用验证码" required style="width: 70%;float: left" clearable/>
        <div class="login-code" style="height: 44px;float: left" @click="getCode">
            <img :src="codeUrl">
        </div>
      <!--注册按钮-->
      <div style="margin:60px 20% 0px 20%"><van-button type="primary" size="large" @click="doRegister">注册</van-button></div>
    </van-cell-group>
  </div>
</template>

<script>
import { Field,Button,Notify,Toast } from 'vant';
import { getCodeImg } from '@/api/login'
import { register } from '@/api/user'
export default {
    name: "register",
    components: {
      [Field.name]: Field,
      [Button.name]: Button,
      [Notify.name]: Notify,
      [Toast.name]: Toast
    },
    data() {
        return {
            codeUrl:'',
            form: {
                username: '',
                password: '',
                phone: '',
                uuid: '',
                checkPassword: '',
                code:''
            }
        };
    },
    mounted(){
      this.getCode()
    },
    methods: {
        getCode(){
            getCodeImg().then(res =>{
                this.codeUrl = 'data:image/gif;base64,' + res.img
                this.form.uuid = res.uuid
            })
        },
      doRegister(){
          if (this.form.username == ''){
            Notify({
              message: '用户名不能为空!',
              duration: 2500
            });
          }else if (this.form.phone == ''){
            Notify({
              message: '手机号不能为空!',
              duration: 2500
            });
          } else if (this.form.password == ''){
            Notify({
              message: '密码不能为空!',
              duration: 2500
            });
          }else if (this.form.checkPassword == ''){
            Notify({
              message: '确认密码不能为空!',
              duration: 2500
            });
          }else if (this.form.code == ''){
            Notify({
              message: '验证码不能为空!',
              duration: 2500
            });
          }else if (this.form.password != this.form.checkPassword){
            Notify({
              message: '输入的两次密码不一致!',
              duration: 2500
            });
          } else {
            register(this.form).then(res =>{
              Toast.success('注册成功');
              this.$router.push("/login")
            })
          }
      }
    }
}
</script>

<style scoped>

</style>
