<template>
  <!-- 
    这里是首页
  -->
  <div class="page-index">
    <Header headername="aaa"></Header>
    <div class="page-index-content">
      <div class="page-index-banner">
        <homebanner :imgs="bannerList"></homebanner>
      </div>
      <homefoor :commodity="floorListtwo" :floorList="floorList"></homefoor>
    </div>
  </div>
</template>
<script>
import Header from "./.../../../../../components/Header/index";
import homebanner from "./../../../components/Home/banner";
import homefoor from "./../../../components//Home/foor";

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Index",

  components: {
    Header,
    homebanner,
    homefoor
  },

  //计算属性
  computed: {
    ...mapState("home", ["bannerList", "floorListtwo", "floorList"])
    // ...mapGetters("home", ["floorListdata"])
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
.page-index {
  background-color: #e5e5e5;
  padding-top: 2.875rem;

  // banner
  .page-index-banner {
    height: 12.5rem;
    padding: 1.25rem 0;
    box-sizing: border-box;
  }
}
</style>
