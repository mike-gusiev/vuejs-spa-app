import Vue from 'vue'
import Vuex from 'vuex'

import { posts } from './modules/posts'
import { login } from './modules/login'
import { registration } from './modules/registration'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    login,
    registration
  }
})
