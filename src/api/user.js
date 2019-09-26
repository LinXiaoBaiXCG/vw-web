import request from '@/utils/request'

export function register(data) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/api/user/getUserInfo',
    method: 'get'
  })
}
