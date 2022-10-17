import { createApp } from "vue";

import axios from "axios";

import App from "./App.vue";
import "./main.css";

import router from "./router/router.js";
import store from "./store/index";
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
