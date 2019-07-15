import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '../components/pages/home/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'Login' */ '../components/pages/login/Login.vue')
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import(/* webpackChunkName: 'Registration' */ '../components/pages/registration/Registration.vue')
    },
    {
      path: '/new-post',
      name: 'NewPost',
      component: () => import(/* webpackChunkName: 'NewPost' */ '../components/pages/new-post/NewPost.vue')
    }
  ]
})
