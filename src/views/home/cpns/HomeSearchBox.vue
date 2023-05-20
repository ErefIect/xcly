<script setup>
// 城市/我的位置
import { useRouter } from "vue-router";
import { useCity } from "@/stores/modules/city";
import { storeToRefs } from "pinia";

const router = useRouter();
// 点击city跳转到city.vue
const cityClick = () => {
  router.push("/city");
};

// 点击位置获取经纬度坐标
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res);
  });
};
const cityStore = useCity();
const { currentCity } = storeToRefs(cityStore);
</script>

<template>
  <div class="home-search-box">
    <!-- 城市/我的位置 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range section">
      <div class="start">
        <div class="tip">入住</div>
        <div class="time">8月29</div>
      </div>
      <div class="stay"></div>
      <div class="end">
        <div class="tip">入住</div>
        <div class="time">8月29</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 城市/我的位置
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    font-size: 15px;
    color: #666;
  }

  .position {
    width: 72px;

    .text {
      font-size: 12px;
      color: #999;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
