<template>
  <!-- 
    这里是分类页
  -->
  <div class="page-category">
    <CategorysHeader></CategorysHeader>
    <categorys :cateCents="categoryList" :cateParticulars="cateParticularsList" />
  </div>
</template>

<script>
import categorys from "../../components/Category";
import CategorysHeader from "./../../components/Category/Categoryheader";
import { mapActions, mapState } from "vuex";
export default {
  name: "caregoy",
  components: {
    categorys,
    CategorysHeader
  },
  methods: {
    ...mapActions("category", ["getCategoryList"])
  },
  computed: {
    ...mapState("category", ["categoryList", "cateParticularsList"])
  },
  created() {
    this.getCategoryList();
  }
};
</script>

<style lang="scss">
.page-category {
  margin-top: 46px;
}
</style>
