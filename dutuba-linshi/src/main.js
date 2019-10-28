import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './assets/css/tsplus.less'
import './icons/iconfont.js' // from http://www.iconfont.cn h5 仓库
import './registerServiceWorker'
import components from './components.js'
Vue.config.productionTip = false

components.forEach(component => {
  Vue.component(component.name, component)
})
window.$danbao = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
