import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入初始化css
import "./assets/styles/home.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
