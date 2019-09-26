import axios from 'axios'
import router from '@/router'
import { Notify } from 'vant';
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 1200000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if (code < 200 || code > 300) {
      Notify({
        message: response.message,
        duration: 2500
      });
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notify({
          message: '网络请求超时',
          duration: 2500
        });
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        Notify({
          message: '网络请求错误',
          duration: 2500
        });
        return Promise.reject(error)
      }
    }
    if (code === 401) {
      Notify({
        message: '账户异常，请登录',
        duration: 2500
      });
      router.push({ path: '/login' })
    } else if (code === 403) {
      // router.push({ path: '/401' })
      router.push({ path: '/login' })
    } else {
      const errorMsg = error.response.data.message
      if (errorMsg !== undefined) {
        Notify({
          message: errorMsg,
          duration: 2500
        });
      }
    }
    return Promise.reject(error)
  }
)
export default service
