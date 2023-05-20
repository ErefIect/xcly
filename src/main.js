import { createApp } from "vue";
import App from "./App.vue";

import "normalize.css";
import "./assets/index.css";

import { router } from "@/router";
import { pinia } from '@/stores'

createApp(App).use(router)
              .use(pinia)
              .mount("#app");