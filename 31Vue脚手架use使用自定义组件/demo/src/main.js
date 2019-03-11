import Vue from 'vue'
import App from './App.vue'

import Date from './components/date/index.js'
Vue.use(Date)


new Vue({
  el: '#app',
  render: h => h(App)
})
