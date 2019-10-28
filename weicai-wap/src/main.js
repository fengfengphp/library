import App from './App'
import '@/assets/js/lib-flexble';
import '@/assets/style/index.less'
import '@/config/vux'
import router from './router'
import store from '@/store/index'
import fastclick from 'fastclick'
fastclick.attach(document.body)
import buttonMove from './directives/buttonMove'
Vue.directive('buttonMove',buttonMove)
import Copy from 'v-copy'
Vue.use(Copy)

Vue.config.productionTip = false

window.$pig = new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
