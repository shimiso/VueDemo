<template>
  <div id="app">
      

      {{count}}

      <button @click="add">+</button>
      <button @click="reduce">-</button>


      <button @click="odd">偶数</button>
      <button @click="ay">异步</button>


  </div>
</template>

<script>
import store from './store/state.js';
import {mapState,mapActions} from 'vuex';
export default {
  store,
  computed:mapState([
    "count"
  ]),
  methods:mapActions([
    "add",
    "reduce",
    "odd",
    "ay"
  ]),
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
