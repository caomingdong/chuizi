<template>
  <!-- 
    这里是分类页
  -->
  <div class="page-category">
    <!-- <category></category> -->
  </div>
</template>

<script>
import category from "../../components/Category/cent/centent";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("category", ["getCategoryList"])
  },
  created() {
    this.getCategoryList();
    console.log(this.getCategoryList());
  }
};
</script>
