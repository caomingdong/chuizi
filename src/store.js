import Vue from "vue";
import Vuex from "vuex";

import home from "./store/Home/home.js";
import foor from "./store/Home/foor.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    foor
  }
});
