import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入初始化css
import "./assets/styles/home.scss";

import { Popup, Button, NavBar, icon } from "vant";

Vue.use(Popup)
  .use(Button)
  .use(NavBar)
  .use(icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
