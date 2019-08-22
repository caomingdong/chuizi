<template>
  <!-- 
    这里是详情页
    /item/:itemId
  -->
  <div class="page-item">
    <ItemList :itemLists="ItemList[0]" :RecommendList="RecommendList"></ItemList>
  </div>
</template>

<script>
import ItemList from "../../components/ItemList/index";
import { mapActions, mapState } from "vuex";
export default {
<<<<<<< HEAD
  name: 'Item',
  watch: {
    $route(newVal, oldVal) {
      let ids = this.$route.params.itemId
      ids = ids.substring(0, ids.length - 2)
      this.getItemList(ids)
    }
  },
=======
  name: "Item",
>>>>>>> ecbe536c18143423553c420f25df5601187fa431
  components: {
    ItemList
  },
  methods: {
    ...mapActions("category", ["getItemList"])
  },
  computed: {
    ...mapState('category', ['ItemList', 'RecommendList'])
  },
  created() {
    let ids = this.$route.params.itemId;
    ids = ids.substring(0, ids.length - 2);
    this.getItemList(ids);
  }
};
</script>
