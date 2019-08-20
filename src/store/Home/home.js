// 引入axios插件
import request from "./../../utils/requst";

export default {
    // 命名空间
    namespaced: true,

    state: {
        bannerList: [],
        floorList: []
    },

    // 变化
    mutations: {
        // banner
        setBannerList(state, payload) {
            state.bannerList = payload.data.banner.dataList;
            state.floorList = payload.data.floors;
            console.log(payload.data.floors);
        }
    },

    actions: {
        // banner
        getBannerList(context) {
            request
                .get(
                    "/cate/marketing/mobile/index_2a19cbb4cf2b6dfdd81dd251912a9903.json"
                )
                .then(data => {
                    context.commit("setBannerList", data);
                    console.log(data);
                });
        }
    }
};
