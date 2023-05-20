<script setup>
import TabBar from './componets/tabbar/TabBar.vue';
</script>

<template>
  <div class="app">
    <!-- <h2>app组件</h2> -->
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<style lang="less" scoped></style>
