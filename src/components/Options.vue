<script setup lang="ts">

</script>

<template>
  <header>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </header>
      
      <!-- 路由视图将在此渲染 -->
      <router-view></router-view>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

