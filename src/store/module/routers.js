// 递归添加路由模块
import { constRouters,asyncRouters } from "../../router"

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state,routes) => {
    state.addRoutes = routes
    state.routes = constRouters.concat(routes)
  }
}

const actions = {
  // 权限参数
  initRoutes ({commit} , roles) {
    return new Promise(resolve => {
      let sendRoutes 
      if (roles.includes('admin')){
        sendRoutes = asyncRouters || []
      }else {
        sendRoutes = filterAsyncRoutes(asyncRouters,roles)
      }
      window.console.log(sendRoutes)
      commit('SET_ROUTES',sendRoutes)
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}