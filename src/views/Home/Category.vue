<template>
  <!-- 
    这里是分类页
  -->
  <div class="page-category">
    <categorys :cateCents="categoryList" :cateParticulars="cateParticularsList" />
  </div>
</template>

<script>
import categorys from "../../components/Category";
import { mapActions, mapState } from "vuex";
export default {
  name: "caregoy",
  components: {
    categorys
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
