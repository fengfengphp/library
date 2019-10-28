import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'

Vue.use(Router)
// const isTokenBeforEnter = (to, from, next) => {
//   if (store.state.token) {
//     next()
//   } else {
//     next('/')
//   }
// } //拦截未登录
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('@/views/home'),
    },
    {
      path: '/mall',
      name: '商城',
      component: () => import('@/views/mall'),
    },
    {
      path: '/message',
      name: '消息',
      component: () => import('@/views/message'),
    },
    {
      path: '/my',
      name: '我的',
      component: () => import('@/views/my'),
    },
    {
      path: '/signin',
      name: '登录',
      component: () => import('@/views/sign/Signin'),
    },
  ]
})

// 页面跳转时滚动条回到顶部（除个人中心）
router.afterEach((to, from) => {
  if (from.fullPath.indexOf('UserCenter') === -1) {
    window.scrollTo(0, 0)
  }
})
export default router
