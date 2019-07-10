import Vue from 'vue'
import { URL } from '../../core/constants'

export const registration = {
  namespaced: true,

  actions: {
    registrationUser ({}, registrationWithRouter) {
      Vue.http.post(URL + '/users', { id: Date.now(), name: registrationWithRouter.name, password: registrationWithRouter.password }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      registrationWithRouter.router.push({ name: 'Login' })
    }
  }
}
