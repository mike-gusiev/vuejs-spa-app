import Vue from 'vue'
import { URL } from '../../core/constants'

export const login = {
  namespaced: true,

  state: {
    isLogin: false,
    users: []
  },

  mutations: {
    changeLoginStatus (state, status) {
      state.isLogin = status
    },

    mutationGetUsers (state, users) {
      state.users = users
    }
  },

  actions: {
    loginUser ({ commit }, loginWithRouter) {
      commit('changeLoginStatus', true)

      let user = { name: loginWithRouter.name, password: loginWithRouter.password }
      localStorage.setItem('User', JSON.stringify(user))

      loginWithRouter.router.push({ name: 'Home' })
    },

    getUsers ({ commit }) {
      Vue.http.get(URL + '/users')
        .then(response => commit('mutationGetUsers', response.data))
        .catch(error => console.error(error))
    },

    loginStatus ({ commit }) {
      if (localStorage.getItem('User')) {
        commit('changeLoginStatus', true)
      }
    },

    exitUser ({ commit }) {
      localStorage.removeItem('User')
      commit('changeLoginStatus', false)
    }
  }
}
