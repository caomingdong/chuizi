// 引入axios插件
import request from './../../utils/requst'

export default {
    // 命名空间
    namespaced: true,

    state: {
        bannerList: [],
        floorList: [],
        floorListtwo: []
    },

    getters: {
        id(state) {
            let result = []
            state.floorList.forEach(element => {
                element.dataList.forEach(item => {
                    result.push(item)
                })
            })
            // console.log(result, "3");
            return result
        }
    },
    // 变化
    mutations: {
        // banner
        setBannerList(state, payload) {
            // console.log(payload.floors, "4");
            state.bannerList = payload.banner.dataList
            state.floorList = payload.floors
        },
        // 商品
        setfloorList(state, payload) {
            // console.log(payload, "5");
            state.floorListtwo = []
            state.floorListtwo = payload.list
        }
    },

    actions: {
        // banner
        getBannerList(context) {
            request
                .get(
                    '/cate/marketing/mobile/index_2a19cbb4cf2b6dfdd81dd251912a9903.json'
                )
                .then(data => {
                    context.commit('setBannerList', data)
                    // console.log(data, "2");
                    context.dispatch('getfloorList')
                })
        },
        // floors
        getfloorList({
            getters,
            commit
        }) {
            request
                .get('/sku/product/skus', {
                    params: {
                        ids: getters.id.join(','),
                        with_stock: true,
                        with_spu: true
                    }
                })
                .then(data => {
                    // console.log(data, "1");
                    commit('setfloorList', data.data)
                })
        }
    }
}
