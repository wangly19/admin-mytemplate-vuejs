import request from '../request'
const homeAPI = () => {
  return request({
    url: '/apiReplace/homedata',
    method: 'get',
  })
}
export default homeAPI