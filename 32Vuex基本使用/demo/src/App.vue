<template>
  <div id="app">
        {{msg}}
        <hr>
        {{$store.state.num}}

        <hr>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>

import store from './store/state.js'

export default {
  store,
  name: 'app',
  data () {
    return {
      msg: '这是app.vue页面'
    }
  }
}
</script>

