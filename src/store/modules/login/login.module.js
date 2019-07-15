import Vue from 'vue'
import { URL } from '../../../core/constants'
import {
  SIGN_IN_SET_USERS,
  SIGN_IN_LOG_IN,
  SIGN_IN_LOG_OUT,
  USER_CHECK_LOGIN_STATUS
} from './mutation-types'

export const login = {
  namespaced: true,

  state: {
    isLogin: false,
    users: []
  },

  mutations: {
    [SIGN_IN_SET_USERS] (state, users) {
      state.users = users
    },

    [SIGN_IN_LOG_IN] (state, loginWithRouter) {
      localStorage.setItem('User', JSON.stringify({ name: loginWithRouter.name, password: loginWithRouter.password }))
      loginWithRouter.router.push({ name: 'Home' })
      state.isLogin = true
    },

    [SIGN_IN_LOG_OUT] (state, router) {
      localStorage.removeItem('User')
      router.router.push({ name: 'Home' })
      state.isLogin = false
    },

    [USER_CHECK_LOGIN_STATUS] (state) {
      if (localStorage.getItem('User')) {
        state.isLogin = true
      }
    }
  },

  actions: {
    getUsers ({ commit }) {
      Vue.http.get(URL + '/users')
        .then(response => commit(SIGN_IN_SET_USERS, response.data))
        .catch(error => console.error(error))
    }
  }
}
