import Vue from 'vue'

import 'normalize.css/normalize.css' // css 重置

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // 全局 css

import App from './App'
import router from './router'
import store from './store'
import '@/permission' // 权限控制
import * as filters from './filters' // 过滤器方法
import '@/icons' // 引入 svg 文件
import SvgIcon from '@/components/SvgIcon' // 引入 SvgIcon 组件

// 全局注册 SvgIcon 组件
Vue.component('svg-icon', SvgIcon)

// 全局配置 ElementUI
Vue.use(ElementUI, {
  size: 'small'
})

// 配置全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
