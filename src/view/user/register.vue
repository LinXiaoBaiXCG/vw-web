<template>
    <van-cell-group>
        <van-field
                v-model="loginForm.username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
        />
        <van-field
                v-model="loginForm.phone"
                required
                clearable
                label="手机号码"
                placeholder="请输入手机号码"
        />
        <van-field
                v-model="loginForm.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
        />
        <van-field
                v-model="loginForm.checkPassword"
                type="password"
                label="确认密码"
                placeholder="请再次输入密码"
                required
        />
        <van-field v-model="code" placeholder="请输入用验证码" />
        <div class="login-code" style="height: 100px">
            <img :src="codeUrl" @click="getCode">
        </div>
    </van-cell-group>
</template>

<script>
import { Field } from 'vant';
import { getCodeImg } from '@/api/login'
export default {
    name: "register",
    components: {
      [Field.name]: Field
    },
    data() {
        return {
            codeUrl:'',
            code:'',
            loginForm: {
                username: '',
                password: '',
                phone: '',
                uuid: '',
                password :'',
                checkPassword: ''
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
                this.loginForm.uuid = res.uuid
            })
        }
    }
}
</script>

<style scoped>

</style>
