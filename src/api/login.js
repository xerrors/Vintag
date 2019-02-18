import request from '@/utils/request'
// 登录
export function login(userForm) {
  return request({
    url: '/api/login',
    method: 'post',
    data: JSON.stringify(userForm)
  })
}
// 获取用户信息
export function getInfo(token) {
  return request({
    url: '/api/getInfo',
    method: 'get',
    params: { token }
  })
}
// 登出
export function logout() {
  return request({
    url: '/api/logout',
    method: 'post'
  })
}
// 注册
export function register(userForm) {
  return request({
    url: '/api/register',
    method: 'post',
    data: userForm
  })
}
