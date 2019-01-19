import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import '@/icons' // icon
import '@/permission' // permission control

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.use(ElementUI, { locale })
Vue.component('chart', ECharts)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
