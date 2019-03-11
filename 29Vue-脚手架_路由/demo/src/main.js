import Vue from 'vue'
import App from './App.vue'


/*1.0
import VueRouter from "vue-router"
Vue.use(VueRouter)

import HomeView from './components/HomeView.vue'
import NewsView from './components/NewsView.vue'
import MyView from './components/MyView.vue'

//配置路由

var routes = [
	
	{path:"/home",component:HomeView},
	{path:"/news",component:NewsView},
	{path:"/my",component:MyView},
]

//实例化

var router = new VueRouter({
	routes
})

*/


/*2.0*/
import VueRouter from "vue-router"
Vue.use(VueRouter)


import RouterConfig from './router/router.config.js'

var router = new VueRouter(RouterConfig)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
