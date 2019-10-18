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
    method: 'get'
  })
}

export function agree(params) {
  return request({
    url: '/api/answer/agree',
    method: 'get',
    params
  })
}

export function getMyAnswer(params) {
  return request({
    url: '/api/answer/getMyAnswer',
    method: 'get',
    params
  })
}

export function getRecommendList(params) {
  return request({
    url: '/api/answer/getRecommendList',
    method: 'get',
    params
  })
}
