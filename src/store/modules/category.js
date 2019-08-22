import request from '../../utils/requst'
export default {
  namespaced: true,
  state: {
    categoryList: [], // 分类数据
    cateParticularsList: [],
    ItemList: []
  },
  getters: {
    skus(state) {
      let result = []
      state.categoryList.forEach(item => {
        item.layout.dataList.forEach(i => {
          result.push(i.sku)
        })
      })

      return result
    }
  },
  mutations: {
    setCategoryList(state, payload) {
      state.categoryList = payload
    },
    setCateParticularsList(state, payload) {
      state.cateParticularsList = payload
    },
    setItemList(state, payload) {
      state.ItemList = payload
    }
  },
  actions: {
    getCategoryList(context) {
      request
        .get(
          '/cate/marketing/mobile/category_a1071de81525177a67d87e350524a987.json'
        )
        .then(response => {
          let data = response.data
          context.commit('setCategoryList', data)
          context.dispatch('getCateParticularsList')
        })
    },
    getCateParticularsList({ getters, commit }) {
      request
        .get('https://shopapi.smartisan.com/product/skus', {
          params: {
            ids: getters.skus.join(','),
            with_stock: true,
            with_spu: true
          }
        })
        .then(response => {
          let data = response.data
          commit('setCateParticularsList', data.data.list)
        })
    },
    getItemList({ commit }, ids) {
      request
        .get('https://shopapi.smartisan.com/product/spus', {
          params: {
            ids: ids
          }
        })
        .then(response => {
          let data = response.data
          commit('setItemList', data.data.list)
        })
    }
  }
}