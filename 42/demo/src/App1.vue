<template>
  <div id="app">
        

        <mt-button @click="btn1">{{msg}}</mt-button>


        <mt-button @click="btn2">这是一个提示信息</mt-button>

        <mt-button @click="btn3">加载</mt-button>


        <mt-button @click="btn4">弹出框</mt-button>


  </div>
</template>

<script>
import { Toast,Indicator,MessageBox   } from 'mint-ui';
export default {
  data(){

    return {
      msg:"这是一个按钮"
    }
  },
  methods:{
    btn1(){
      alert(1);
    },
    btn2(){
      Toast({
        message:"这是一个提示信息",
        position:'top',
        duration:3000
      })
    },
    btn3(){

      Indicator.open({
          text:"这是一个加载中...",
          spinnerType:'double-bounce'
      });

      setTimeout(()=>{

        Indicator.close();

      },3000)

    },
    btn4(){

        MessageBox({
            title:"这是一个提示框",
            message:"提示内容在这里",
            showCancelButton: true
        });

    }

  }


}
</script>

<style>
@import url("//unpkg.com/mint-ui/lib/style.css");
</style>