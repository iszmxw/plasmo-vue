<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>欢迎来到选项配置页面</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      编辑
      <code>components/Options.vue</code> 来测试 HMRasas
    </p>
  </div>
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

