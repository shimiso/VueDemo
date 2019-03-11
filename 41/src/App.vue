<template>
  <div id="app">
      

    <HeaderView></HeaderView>
    
    <router-view></router-view> 
 
    <FooterView></FooterView>  

  
  </div>
</template>

<script>

import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
export default{

  components:{

      HeaderView,
      FooterView
  }

}

</script>
<style scoped>
  

  @import './assets/css/index.css';
  @import './assets/css/swiper.min.css';

</style>
