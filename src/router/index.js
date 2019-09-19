import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/view/user/register'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/problem',
      name: 'problem',
      component: () => import('@/view/problem'),
      meta: {
        title: '添加问题'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/'),
      meta: {
        title: '首页'
      }
    },
  ]
})
