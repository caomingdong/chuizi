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
      //   console.log(result, "2");
      return result
    }
  },
  // 变化
  mutations: {
    // banner
    setBannerList(state, payload) {
      state.bannerList = payload.data.banner.dataList
      state.floorList = payload.data.floors
    },
    // 商品
    setfloorList(state, payload) {
      state.floorListtwo = payload.data.list
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
          context.dispatch('getfloorList')
        })
    },
    // floors
    getfloorList({ getters, commit }) {
      request
        .get('/skus/product/skus', {
          params: {
            ids: getters.id.join(','),
            with_stock: true,
            with_spu: true
          }
        })
        .then(data => {
          commit('setfloorList', data.data)
          //   console.log(data.data, "1");
        })
    }
  }
}
