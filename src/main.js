import Vue from 'vue'
import Element from 'element-ui'
import VueResource from 'vue-resource'
import App from './App'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
