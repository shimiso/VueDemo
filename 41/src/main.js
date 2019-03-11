import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './router/router.config.js';

import store from './store/index.js';

const router = new VueRouter({
	routes
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
