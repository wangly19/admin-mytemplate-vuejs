import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

// 导入模块
import user from './module/user'
import routers from './module/routers'
import app from "./module/app";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    routers,
    app
  },
  getters
})

export default store