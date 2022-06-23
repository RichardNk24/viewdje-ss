import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Products from "./components/Products.vue";

const app = createApp(App);

// eslint-disable-next-line vue/multi-word-component-names
app.component("Products", Products);
app.use(createPinia());
app.use(router);

app.mount("#app");
