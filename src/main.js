import { createApp } from "vue";

import axios from "axios";

import App from "./App.vue";
import "./main.css";

import router from "./router/router.js";
const app = createApp(App);
app.use(router);
app.mount("#app");
