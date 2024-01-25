<template>
  <div>
    <AppWidget></AppWidget>
  </div>
</template>

<style>
*,body{
  margin: 0 !important;;
  padding: 0 !important;;
}
html{
  margin: 0 !important;;
  padding: 0 !important;;
}
</style>

<script setup lang="ts">
// 引入element-plus插件与样式
import { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import AppWidget from './components/NewTab.vue';

defineOptions({
  prepare(app: App) {
    // Use any plugins here:
    app.use(ElementPlus);
    app.mount('#app');
  },
});
</script>
