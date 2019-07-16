import Vue from 'vue'
import { URL } from '../../../core/constants'

export const registration = {
  namespaced: true,

  actions: {
    registrationUser ({}, registrationWithRouter) {
      Vue.http.post(URL + '/users', { id: Date.now(), name: registrationWithRouter.name, password: registrationWithRouter.password })
        .then(registrationWithRouter.router.push({ name: 'Login' }))
        .catch(error => console.log(error))
    }
  }
}
