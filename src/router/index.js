import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view'),
      meta: {
        title: '首页'
      }
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
      path: '/answer',
      name: 'answer',
      component: () => import('@/view/answer'),
      meta: {
        title: '回答问题'
      }
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('@/view/answer/details'),
      meta: {
        title: '详细回答'
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
    {
      path: '/notice',
      name: 'notice',
      component: () => import('@/view/notice'),
      meta: {
        title: '通知'
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/view/my'),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('@/view/answer/all'),
      meta: {
        title: '全部回答'
      }
    },
    {
      path: '/myProblem',
      name: 'myProblem',
      component: () => import('@/view/my/myProblem'),
      meta: {
        title: '我的提问'
      }
    },
  ]
})
