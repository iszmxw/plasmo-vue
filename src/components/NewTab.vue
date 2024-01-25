<script setup lang="ts">

</script>

<template>
  <el-container>
  <el-aside width="55px">侧边栏，全部存放导航分组</el-aside>
  <el-container>
    <el-header>头部，存放搜索框和时间</el-header>
    <el-main>存放导航链接</el-main>
    <el-footer>展示随机语录</el-footer>
  </el-container>
</el-container>
</template>

<style scoped>
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

