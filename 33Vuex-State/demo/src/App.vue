<template>
  <div id="app">
    {{msg}}
    <hr>
    {{$store.state.count}}
    <hr>
   1111111||| {{count}}  |||222222

  </div>
</template>

<script>

import store from './store/state.js'

import { mapState } from 'vuex'

export default {
  store,
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  /*computed:{

    count(){
        return store.state.count;
    }
  }*/
  computed:mapState({

      count: function(state){
          return state.count;
      }
  })
}
</script>
