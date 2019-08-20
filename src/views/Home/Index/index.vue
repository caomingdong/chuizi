<template>
  <!-- 
    这里是首页
  -->
  <div class="page-index">
    <Header></Header>
    <div class="page-index-content">
      <div class="page-index-banner">
        <homebanner :imgs="bannerList"></homebanner>
      </div>
      <div class="page-index-homefoor">
        <homefoor></homefoor>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./../../../components/Header/index.vue";
import homebanner from "./../../../components/Home/banner.vue";
import homefoor from "./../../../components/Home/foor.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Index",

  components: {
    Header,
    homebanner,
    homefoor
  },

  //计算属性
  computed: {
    ...mapState("home", ["bannerList"])
  },

  // 方法
  methods: {
    ...mapActions("home", ["getBannerList"])
  },
  created() {
    this.getBannerList();
  }
};
</script>
<style lang="scss">
@import "./../../../assets/styles/home/index.scss";
</style>
