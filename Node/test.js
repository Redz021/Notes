import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

import store from './test/src/store'

router.beforeEach((to, from, next) => {
  console.log(store.state.isLogin)
  if (to.meta.requireAuth) {
    let isLogin = store.state.isLogin
    if (!isLogin) {
      router.push('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
