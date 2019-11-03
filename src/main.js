import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入elelmen
import 'element-ui/lib/theme-chalk/index.css'
import './styles/clear.scss'
import Element from 'element-ui'

// 引入mock
import './mock'

import './router/permission'

// 引入 v-charts 图表库
import VCharts from "v-charts";

// 导入项目
Vue.use(Element)
Vue.config.productionTip = false
Vue.use(VCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
