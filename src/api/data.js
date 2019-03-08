import request from '@/utils/request'

export function getData(token) {
  return request({
    url: '/getData',
    method: 'get',
    params: {
      token
    }
  })
}

export function addData(dataBaseForm) {
  return request({
    url: '/addData',
    method: 'post',
    data: dataBaseForm,
    transformRequest: [(data) => {
      let ret = ''
      let item = ''
      for (item in data) {
        ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
      }
      ret = ret.substring(0, ret.length - 1)
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function deleteData(dataForm) {
  return request({
    url: '/login',
    method: 'post',
    data: 'url=' + dataForm.url + '&' + 'password=' + dataForm.dataUser,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
