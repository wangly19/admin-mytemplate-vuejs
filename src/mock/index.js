/* mock配置文件
  ps：mock模块会影响原生的ajax请求，使得服务器返回的blob类型变成乱码，
  所以如果在代码中有使用blob时，需要在mainjs中把mock注释掉，才能正常使用
*/
// 引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random

import homeData from './module/home_mock'
// 返回样式
const result = {
  data: {},
  resultCode: 1,
  resultMessage: 'success'
}
// mock一组数据
const loginData = () => {
  result.data = {
    token: Random.string(10),
    userInfo: {
      name: 'cc',
      roles: [
        {
          id: 2,
          role: ['admin']
        }
      ]
    }
  }
  return result
}

// 获取用户信息方法
const UserData = (name = 'admin') => {
  if (name !== 'admin'){
    result.data = {
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      from: 'i am edit user',
      name: 'edit',
      roles: ['edit']
    }
  }else {
    result.data = {
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      from: 'i am admin user',
      name: 'wangly',
      roles: ['admin']
    }
  }
  return result
}

Mock.mock('/apiReplace/login', 'post', loginData)
Mock.mock('/apiReplace/userinfo', 'get',UserData )
Mock.mock('/apiReplace/homedata', 'get',homeData )