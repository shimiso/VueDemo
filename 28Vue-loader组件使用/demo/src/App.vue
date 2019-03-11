<template>

  <div id="app">
    
    {{msg}}
      
    <HomeView></HomeView>
    <ShopView></ShopView>

  </div>
</template>

<script>

import HomeView from './components/Home.vue'
import ShopView from './components/shop.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome vue-loader'
    }
  },
  components:{

    HomeView,
    ShopView

  }
}
</script>

<style lang="scss" scoped>
$a:red;
#app{
    background:$a;
}

</style>
