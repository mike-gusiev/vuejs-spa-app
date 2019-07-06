import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/home/Home.vue'
import Login from '../components/pages/login/Login.vue'
import Registration from '../components/pages/registration/Registration.vue'
import NewPost from '../components/pages/new-post/NewPost.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/new-post',
      component: NewPost
    }
  ]
})
