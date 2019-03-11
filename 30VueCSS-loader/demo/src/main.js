import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)


import HomeView from './components/HomeView.vue'
import ListView from './components/ListView.vue'

import './assets/animate.css'

var routes = [
	{path:"/home",component:HomeView},
	{path:"/list",component:ListView},
]

var router = new VueRouter({
	routes
})


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
