import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import '@/utils/vue_directive.js'
import '@/common/css/index.scss'
// import '@/config/element_ui.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
