<template>
  <div id="app">

      {{count}}

      <button @click="$store.commit('add',2)">+2</button>
      <button @click="add(10)">+10</button>
      <button @click="$store.commit('reduce')">-</button>
      
  </div>
</template>

<script>
import store from './store/state.js';
import {mapState,mapMutations} from 'vuex';
export default {
  store,
  computed:mapState(["count"]),
  methods:mapMutations(["add"]),
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
