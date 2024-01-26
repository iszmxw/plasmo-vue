<template>
</template>


<style>
*,body,html{
  margin: 0 !important;
  padding: 0 !important;
}
</style>


<script setup lang="ts">
import './index.css';
import { createApp } from 'vue';
import NewTab from '../components/NewTab.vue';
const app = createApp(NewTab)
// 引入element-plus插件与样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// Use any plugins here:
app.use(ElementPlus);
app.mount('#haogou-options-page');
</script>

