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
  name: "Item",
  watch: {
    $route(newVal, oldVal) {
      let ids = this.$route.params.itemId;
      ids = ids.substring(0, ids.length - 2);
      this.getItemList(ids);
      document.querySelector(".scroll-content").scrollTop = 0;
    }
  },
  components: {
    ItemList
  },
  methods: {
    ...mapActions("category", ["getItemList"])
  },
  computed: {
    ...mapState("category", ["ItemList", "RecommendList"])
  },
  created() {
    let ids = this.$route.params.itemId;
    ids = ids.substring(0, ids.length - 2);
    this.getItemList(ids);
  }
};
</script>
