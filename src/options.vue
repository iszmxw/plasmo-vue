<template>
  <div>
    <Options msg="Options Pages" />
  </div>
</template>

<style></style>

<script setup lang="ts">
// 引入element-plus插件与样式
import { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Options from "./components/Options.vue";

defineOptions({
  prepare(app: App) {
    // Use any plugins here:
    app.use(ElementPlus);
    app.mount('#app');
  },
});
</script>
