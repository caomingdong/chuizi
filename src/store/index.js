import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD:src/store/index.js

import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  }
});
=======
import category from "./stores/H-modus/category";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    category
  }
});
>>>>>>> b6f4407d35acf068c195a0fff121670b6532021c:src/store.js
