import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

export const useScorll = () => {
  // 滚动是否到底部(默认为false)
  const isReachBottom = ref(false);
  // 客户端高度
  const clientHeight = ref(0);
  // 滚动距离
  const scrollTop = ref(0);
  // 内容中高度
  const scrollHeight = ref(0);

  // 滚动条监听处理器函数(使用了节流函数, 300ms)
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;

    console.log("滚动中");
    // 如果(客户端高度 + 滚动距离 + >= 内容总高度)
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了");
      //
      isReachBottom.value = true;
    }
  }, 300);

  // 挂载
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });
  // 卸载
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return {
    scrollTop,
    isReachBottom,
  };
};
