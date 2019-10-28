import Vue from 'vue'
import Router from 'vue-router'
import indexChildren from './router-index-children'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/home.vue'),
      children: indexChildren
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue')
    },
    {
      path: '/richTextTinymce',
      name: 'richTextTinymce',
      component: () => import('@/views/richTextTinymce.vue')
    },
    {
      path: '/froalaEditor',
      name: 'froalaEditor',
      component: () => import('@/views/froalaEditor.vue')
    },
    {
      path: '/richtextQuill',
      name: 'richtextQuill',
      component: () => import('@/views/richtextQuill.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('@/views/api.vue')
    }, // nginx代理api
    {
      path: '/waves',
      name: 'waves',
      component: () => import('@/views/waves.vue')
    }, // 水波纹
    {
      path: '/colorfulWaves',
      name: 'colorfulWaves',
      component: () => import('@/views/simpleChangecolorWave.vue')
    }, // 简单改变颜色水波纹
    {
      path: '/bubbling',
      name: 'bubbling',
      component: () => import('@/views/bubbling.vue')
    }, // 冒泡效果
    {
      path: '/readJson',
      name: 'readJson',
      component: () => import('@/views/readJson.vue')
    }, // 读取json文件
    {
      path: '/drag',
      name: 'drag',
      component: () => import('@/views/function/drag.vue')
    }, // 拖拽
    {
      path: '/imgRotate',
      name: 'imgRotate',
      component: () => import('@/views/imgRotate/imgRotate.vue')
    } // 图片旋转
  ]
})
