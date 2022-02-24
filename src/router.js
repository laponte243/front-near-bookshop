import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/users/users'),
        },
        {
          name: 'Market',
          path: 'pages/market',
          component: () => import('@/views/dashboard/pages/market/market'),
        },
        {
          name: 'product',
          path: 'pages/product',
          component: () => import('@/views/dashboard/pages/product/product'),
        },
      ],
    },
  ],
})
