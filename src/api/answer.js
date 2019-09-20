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

export function details(id) {
  return request({
    url: '/api/answer/details/' + id,
    method: 'get',
  })
}
