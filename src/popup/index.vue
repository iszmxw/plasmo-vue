<template>
</template>


<style>
</style>

<script setup lang="ts">
import 'vant/lib/index.css';
import { createApp } from 'vue';
import { Button,Form, Field, CellGroup } from 'vant';
import Popup from '../components/Popup.vue';
const app = createApp(Popup)
// 引入element-plus插件与样式
// Use any plugins here:
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#haogou-popup-page');
</script>
