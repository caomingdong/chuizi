import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Cell, CellGroup, Field, Button, Toast} from 'vant';
//引入初始化css
import "./assets/styles/home.scss";

<<<<<<< HEAD
Vue.use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(Button)
  .use(Toast);
=======
import {
  Popup,
  Button,
  NavBar,
  icon,
  Toast
} from "vant";

Vue.use(Popup)
  .use(Button)
  .use(Toast)
  .use(NavBar)
  .use(icon);

>>>>>>> b6f4407d35acf068c195a0fff121670b6532021c
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
