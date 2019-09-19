import request from '@/utils/request'

export function getCodeImg() {
  return request({
    url: 'api/verificationCode',
    method: 'get'
  })
}

export function wxLogin() {
  return request({
    url: 'api/wxLogin',
    method: 'get'
  })
}

export function login(data) {
  return request({
    url: 'api/login',
    method: 'post',
    data
  })
}
