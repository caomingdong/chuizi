import request from "../../utils/requst";
export default {
  namespaced: true,
  state: {
    categoryList: []
  },
  mutations: {
    setCategoryList(state, payload) {
      state.categoryList = payload;
    }
  },
  actions: {
    getCategoryList(context) {
      request
        .get("/marketing/mobile/category_a1071de81525177a67d87e350524a987.json")
        .then(data => {
          context.commit("setCategoryList", data);
        });
    }
  }
};
