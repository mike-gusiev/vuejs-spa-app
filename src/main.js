import Vue from 'vue';
import Element from 'element-ui';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(Element);
Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
