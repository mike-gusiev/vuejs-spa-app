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
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/new-post',
      name: 'NewPost',
      component: NewPost
    }
  ]
})
