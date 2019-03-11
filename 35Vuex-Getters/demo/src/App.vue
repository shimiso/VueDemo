<template>
  <div id="app">
      
      {{count}}

      <button @click="add">+</button>

      <button @click="reduce">-</button>

  </div>
</template>

<script>
import store from './store/state.js';
import {mapState,mapMutations} from 'vuex';

export default {
  store,
  computed:{
    count:function(store){
      return this.$store.getters.count;
    }
  },
  methods:mapMutations(["add","reduce"]),
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
