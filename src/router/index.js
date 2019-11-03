import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import Layout from '../layout'
// 懒加载路由
import 
{
  LOGIN,
  ERROR
} 
from './url'

// 定义公共路由

export const constRouters = [
  {
    path: '',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home'),
        meta: {title: '首页',icon: 'icon-sound-fill'}
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/DateInfo'),
        meta: { title: '日程', icon: 'el-icon-location' }
      }
    ]
  },
  {
    path: '/table',
    name: 'name',
    component: Layout,
    meta: { title: '表单管理', icon: 'icon-safetycertificate-f'},
    children: [
      {
        path: 'basic',
        name: 'basic-table',
        component: () => import('@/views/Table'),
        meta: {title: '基础表格',icon: 'el-icon-location'}
      },
      {
        path: 'cose',
        name: 'basic-table1',
        component: () => import('@/views/Table'),
        meta: {title: '扩展表格',icon: 'el-icon-location'}
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LOGIN,
  },
  {
    path: '/404',
    name: 'error',
    component: ERROR
  }
]

// 定义异步权限路由
export const asyncRouters = [
  {
    path: '/administrator',
    name: 'Administrator',
    redirect: 'administrator/admin1',
    component: Layout,
    meta: { title: '管理员板块', icon: 'icon-safetycertificate-f', roles: ['admin'] },
    children: [
      {
        path: 'admin1',
        name: 'Admin',
        component: () => import('../components/HelloWorld.vue'),
        meta: { title: '表单管理', roles: ['admin'] }
      },
      {
        path: 'admin2',
        name: 'AdminUserManage',
        component: () => import('../components/HelloWorld.vue'),
        meta: { title: '用户管理', roles: ['admin'] }
      }, 
    ]
  },
  {
    path: '/Administrator1',
    name: '第二个',
    component: () => import('../components/HelloWorld.vue'),
    meta: { title: '管理员专属', icon: 'admin', roles: ['admin'] }
  },
  { path: '*', redirect: '/404' }
]

export default  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRouters
})

