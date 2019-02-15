import request from '@/utils/request'

export function getData(token) {
  return request({
    url: '/data/getData',
    method: 'get',
    params: {
      token
    }
  })
}
