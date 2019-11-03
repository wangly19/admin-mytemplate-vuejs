import router from '../router'

import store from '../store'

import {getToken} from '../util/auth'

const whiteList = ['/login','/404']

// 路由守卫
router.beforeEach((to,from,next) => {
  if (getToken()) {
    if (to.path === '/login') {
      window.console.log(111)
      next({path: '/'})
    }else {
      if (store.getters.roles.length === 0) {
        const roles = ['admin']
        store.dispatch('getUser',roles)
        store.dispatch('routers/initRoutes',roles).then(() => {
          window.console.log(store.getters.addRoutes)          
          router.addRoutes(store.getters.addRoutes)
          next()
        }).catch(err => {
          window.console.log(err)
        })
      }else {
        next()
      }
    }
  }else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
    }
  }
})