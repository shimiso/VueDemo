<template>
  <div id="app">
        
        {{count}}


        <button @click="add">+</button>
        <button @click="reduce">-</button>

  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';

export default {
  computed:mapGetters(["count"]),
  methods:mapActions([
      "add",
      "reduce"
  ]),
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>