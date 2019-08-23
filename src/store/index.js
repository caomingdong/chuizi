import Vue from "vue";
import Vuex from "vuex";

import home from ".//modules/home.js";
import user from "./modules/user";
import category from "./modules/category";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    user,
    category
  }
});
