<template>
    <div id="app">
      <header>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </header>
      
      <!-- 路由视图将在此渲染 -->
      <router-view></router-view>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'App',
    // 如果需要的话，可以在这里添加组件的逻辑
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  header {
    padding: 20px;
    background-color: #f0f0f0;
  }
  header a {
    margin-right: 10px;
  }
  </style>
  