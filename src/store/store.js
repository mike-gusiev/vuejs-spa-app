import Vue from 'vue'
import Vuex from 'vuex'

import { posts } from './modules/posts/posts.module'
import { login } from './modules/login/login.module'
import { registration } from './modules/registration/registration.module'
import { comment } from './modules/comment/comment.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    login,
    registration,
    comment
  }
})
