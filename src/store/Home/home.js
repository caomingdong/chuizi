// 引入axios插件
import request from "./../../utils/requst";

export default {
    // 命名空间
    namespaced: true,

    state: {
        bannerList: []
    },

    // 变化  =>  更改state的地方
    mutations: {
        setBannerList(state, payload) {
            state.bannerList = payload;
            console.log(payload);
        }
    },

    actions: {
        getBannerList({
            commit
        }) {
            request.get("/marketing/mobile/index_2a19cbb4cf2b6dfdd81dd251912a9903.json")
                .then((data) => {
                    commit("setBannerList", data)
                });
        }
    }
};
