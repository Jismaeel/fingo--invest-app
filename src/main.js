import router from "./router";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "flowbite";

const app = createApp(App);

app.use(router);

app.mount("#app");
