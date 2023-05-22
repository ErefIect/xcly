<script setup>
import HomeBanner from './cpns/HomeBanner.vue'
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeSeachBox from './cpns/HomeSearchBox.vue'
import HomeCategories from './cpns/HomeCategories.vue'

import { useHomeStore } from '@/stores/modules/home'
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()

homeStore.fetchCategories()
</script>

<template>
  <div class="home">
    <HomeNavBar />
    <HomeBanner />
    <HomeSeachBox />
    <HomeCategories />
  </div>
</template>

<style lang="less" scoped>

</style>
