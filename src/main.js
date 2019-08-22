import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Cell, CellGroup, Field, Button, Toast} from 'vant';
//引入初始化css
import "./assets/styles/home.scss";

Vue.use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(Button)
  .use(Toast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
