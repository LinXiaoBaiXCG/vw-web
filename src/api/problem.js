import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/api/problem/create',
    method: 'post',
    data
  })
}

export function userProblem(params) {
  return request({
    url: '/api/problem/userProblem',
    method: 'get',
    params
  })
}

export function search(params) {
  return request({
    url: '/api/problem/search',
    method: 'get',
    params
  })
}
