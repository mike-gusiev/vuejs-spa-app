import Vue from 'vue'
import { URL } from '../../../core/constants'
import {
  SIGN_IN_SET_USERS,
  SIGN_IN_SET_CURRENT_USER,
  SIGN_IN_LOG_IN,
  SIGN_IN_LOG_OUT,
  USER_CHECK_LOGIN_STATUS
} from './mutation-types'

export const login = {
  namespaced: true,

  state: {
    isLogin: false,
    users: [],
    currentUser: null
  },

  mutations: {
    [SIGN_IN_SET_USERS] (state, users) {
      state.users = users
    },

    [SIGN_IN_SET_CURRENT_USER] (state, user) {
      state.currentUser = user
    },

    [SIGN_IN_LOG_IN] (state, name) {
      let currentUser = this.state.login.users.find(user => user.name === name)
      localStorage.setItem('User', JSON.stringify({ id: currentUser.id }))
      state.currentUser = name
      state.isLogin = true
    },

    [SIGN_IN_LOG_OUT] (state) {
      localStorage.removeItem('User')
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
    },

    getCurrentUser ({ commit }, id) {
      Vue.http.get(URL + '/users/' + id)
        .then(response => {
          commit(SIGN_IN_SET_CURRENT_USER, response.data.name)
        })
    }
  }
}
