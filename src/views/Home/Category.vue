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
import { mapActions, mapState, mapGetters } from "vuex";
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
    // ...mapGetters("category", ["categoryListCate", "cateParticularsListCate"])
  },
  created() {
    this.getCategoryList();
  }
};
</script>
