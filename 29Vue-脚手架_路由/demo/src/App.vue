<template>
  <div id="app">
    
      <div>
        <router-view></router-view> 
      </div>

      <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/news">新闻</router-link></li>
        <li><router-link to="/my">我的</router-link></li>
      </ul>
    
  </div>
</template>
