import request from '../request'
const login = (data) => {
  return request({
    url: '/apiReplace/login',
    method: 'post',
    data: data
  })
}

export {
  login
}