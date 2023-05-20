// 从vue核心导入 createRouter 和 createWebHashHistory 方法
import { createRouter, createWebHashHistory } from "vue-router";

// 使用 createRouter 方法创建路由实例
export const router = createRouter({
  // createWebHashHistory() 创建一个基于 hash 的历史记录模式，是 SPA 的历史记录模式
  history: createWebHashHistory(),
  // routes 数组中定义了该应用的所有路由规则，每个规则是一个对象，包含 path 和对应的组件
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "home",
      path: "/home",
      component: () => import("@/views/home/Home.vue"),
    },
    {
      name: "favor",
      path: "/favor",
      component: () => import("@/views/favor/Favor.vue"),
    },
    {
      name: "order",
      path: "/order",
      component: () => import("@/views/order/Order.vue"),
    },
    {
      name: "message",
      path: "/message",
      component: () => import("@/views/message/Message.vue"),
    },
    {
      name: "city",
      path: "/city",
      component: () => import("@/views/city/City.vue"),
    },
  ],
});
