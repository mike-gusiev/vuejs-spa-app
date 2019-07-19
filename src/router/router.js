import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:user',
      name: 'UserPage',
      component: () => import(/* webpackChunkName: 'UserPage' */ '../components/pages/userPage/UserPage.vue')
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
