// 引入axios插件
import request from "./../../utils/requst";

export default {
    // 命名空间
    namespaced: true,

    state: {
        bannerList: [],
        floorList: [],
        floorListtwo: [],
    },

    getters: {
        id(state) {
            state.floorList.forEach(element => {
                console.log(element);
            });
        }

    },
    // 变化
    mutations: {
        // banner
        setBannerList(state, payload) {
            state.bannerList = payload.data.banner.dataList;
            state.floorList = payload.data.floors;
            console.log(state.floorList);
        },
        // 商品
        setfloorList(state, payload) {
            state.floorListtwo = payload.data.data.list;
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
                    context.dispatch("getfloorList");
                });
        },
        // floors
        getfloorList(context) {
            request
                .get(
                    "/skus/product/skus", params: {
                        ids: ,
                        'with_stock': true,
                        'with_spu': true
                    }
                )
                .then(data => {
                    context.commit("setfloorList", data);
                    // console.log(data);
                });
        }
    }
};
