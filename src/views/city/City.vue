<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useCity } from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import CityGroup from './cpns/CityGroup.vue'

// search搜索
const searchValue = ref("");

const router = useRouter();
const cancelClick = () => {
  router.back();
};

// tab标签页
const tabActive = ref(0);

// 发起网络请求: 获取所有城市数据
const cityStore = useCity();
const { allCities } = storeToRefs(cityStore);

const loading = ref(true); // 添加 loading ref
cityStore.fetchAllCityData().then(() => {
  loading.value = false;
});

// 当前城市组
// const currentCityGroup = computed(() => allCities.value[tabActive.value])
</script>

<template>
  <div class="city hide-tabbar">
    <!-- 顶部 -->
    <div class="top">
      <!-- search搜索 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @click="cancelClick"
      />

      <!-- 使用 v-if 条件判断来等待异步操作完成 -->
      <template v-if="!loading">
        <!-- tab标签页 -->
        <van-tabs v-model:active="tabActive" color="#ff9854">
          <template v-for="(value, key, index) in allCities" :key="index">
            <van-tab :title="value.title" :name="key">{{ name }}</van-tab>
          </template>
        </van-tabs>
      </template>

      <template v-else>
        <p>正在加载...</p>
      </template>
    </div>

    <!-- 内容 -->
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <CityGroup v-show="tabActive===key" 
                   :group-data="value"></CityGroup>      
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
