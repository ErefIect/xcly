<script setup>
import { useHomeStore } from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<template>
  <div class="home-categories">
    <template v-for="(item, index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
// 推荐分类
.home-categories {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  height: 80px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    width: 70px;
    text-align: center;
    
    img {
      width: 32px;
      height: 32px;
    }
    
    .text {
      margin-top: 3px;
      font-size: 12px;
    }
  }
}
</style>