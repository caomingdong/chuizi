import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入初始化css
import "./assets/styles/home.scss";
import './utils/viewport.js'

import {
  Popup,
  Button,
  NavBar,
  icon,
  Cell,
  CellGroup,
  Field,
  Toast,
  Swipe,
  SwipeItem

} from "vant";

Vue.use(Popup)
  .use(NavBar)
  .use(icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(Cell)
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
