// 引入axios插件
import request from "./../../utils/requst";

export default {
    // 命名空间
    namespaced: true,

    state: {
        bannerList: [],
        floorList: [],
        floorListtwo: []
    },

    // getters: {
    //     floorListdata(state) {
    //         state.commit("setbannerList", arr)
    // let arr = state.bannerlist.map(item => item.img);
    //     }
    // },


    // 变化
    mutations: {
        // banner
        setBannerList(state, payload) {
            state.bannerList = payload.data.banner.dataList;
            state.floorList = payload.data.floors;
            console.log(payload.data)
        },
        // 商品
        setfloorList(state, payload) {
            state.floorListtwo = payload.data.data.list;
            console.log(payload.data.data.list);
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
                    "/skus/product/skus?ids=100051702,100045101,100040601,100051801,100051802,100047901,100047401,100040501,100033802,100041701,100045101,100026601,100026701,100027004,100052001,100052101,100052401,100035703,100025101,100032901,&with_stock=true&with_spu=true"
                )
                .then(data => {
                    context.commit("setfloorList", data);
                    // console.log(data);
                });
        }
    }
};
