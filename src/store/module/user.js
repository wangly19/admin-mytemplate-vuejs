// user store 模块
import { getToken, setToken,clearToken } from "../../util/auth"
import { login } from "../../api/res/login-api"

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: [],
  
}

const mutations = {
  SET_TOKEN: (state,token) => {
    return state.token = token
  },
  SET_NAME: (state,name) => {
    return state.name = name
  },
  SET_AVATAR: (state,avatar) => {
    return state.avatar = avatar
  },
  SET_ROLES: (state,roles) => {
    return state.roles = roles
  }
}

const actions = {
  login({commit} , loginForm) {
    // const {username,assword} = loginForm
    return new Promise((resolve,reject) =>{
      login(loginForm).then(res => {
        const {token} = res.data.data
        commit('SET_TOKEN',token)
        setToken(token)
        resolve()
      })
      .catch(error => {
        reject(error)
      })
    })
  },

  getUser({commit},data){
    // 将root权限给roles
    commit('SET_ROLES',data)
  },

  loginout({commit}){
    // 退出登录
    return new Promise(resolve => {
      commit('SET_TOKEN','')
      commit('SET_ROLES',[])
      clearToken()
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions,
}
