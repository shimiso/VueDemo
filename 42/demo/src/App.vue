<template>
  <div id="app">
        

    <HeaderView></HeaderView>  
    
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 2" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  

    <div id="swiper">
      
      <mt-swipe :auto="2000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>

    </div>

    <FooterView></FooterView>

  </div>
</template>

<script>
  import HeaderView from './components/HeaderView.vue';
  import FooterView from './components/FooterView.vue';
  export default{
    data(){
      return {
        selected:""
      }
    },
    components:{
        HeaderView,
        FooterView
    }

  }

</script>
<style>
@import url("//unpkg.com/mint-ui/lib/style.css");
*{margin:0;padding:0;}
#swiper{
  width:100%;
  height: 200px;
  background: pink;
}

</style>