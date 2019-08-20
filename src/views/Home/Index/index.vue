<template>
  <!-- 
    这里是首页
  -->
  <div class="page-index">
    <Header></Header>
    <div class="page-index-content">
      <div class="page-index-banner"></div>
    </div>
  </div>
</template>
<script>
import Header from "./../../../components/Header/index.vue";

export default {
  name: "Index",

  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import url("../../../assets/styles/home/home.scss");
</style>
