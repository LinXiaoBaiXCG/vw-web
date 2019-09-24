import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/api/answer/insert',
    method: 'post',
    data
  })
}

export function list(params) {
  return request({
    url: '/api/answer/recommend/page',
    method: 'get',
    params
  })
}

export function details(params) {
  return request({
    url: '/api/answer/details',
    method: 'get',
    params
  })
}

export function agree(params) {
  return request({
    url: '/api/answer/agree',
    method: 'get',
    params
  })
}
