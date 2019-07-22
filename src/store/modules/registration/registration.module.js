import Vue from 'vue'
import { URL } from '../../../core/constants'

export const registration = {
  namespaced: true,

  actions: {
    // eslint-disable-next-line
    registrationUser ({}, registrationWithRouter) {
      Vue.http.post(URL + '/users', { name: registrationWithRouter.name, password: registrationWithRouter.password })
        .then(registrationWithRouter.router.push({ name: 'Login' }))
        .catch(error => console.log(error))
    }
  }
}
