import request from '@/utils/request'

export function getCodeImg() {
  return request({
    url: 'api/verificationCode',
    method: 'get'
  })
}
