import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect:'/home',
            component: () => import('@/page/Home')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/page/Home')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/page/test')
        },
        {
            path: '/scrollTest',
            name: 'scrollTest',
            component: () => import('@/page/scroll_test.vue')
        },
        {
            path: '/scrolltop',
            name: 'scrolltop',
            component: () => import('@/page/scrolltop.vue')
        },      //滚动到顶部自定义组件
    ]
})
