<template>
</template>

<script setup lang="ts">
import './index.css'
import { createApp } from 'vue'
import Options from '../components/Options.vue'
const app = createApp(Options)
// 引入element-plus插件与样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// Use any plugins here:
app.use(ElementPlus);
app.mount('#haogou-options-page');
</script>
