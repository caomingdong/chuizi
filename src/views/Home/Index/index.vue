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
      <homefoor></homefoor>
      <homebags></homebags>
    </div>
  </div>
</template>
<script>
import Header from "./../../../components/Header/index.vue";
import homebanner from "./../../../components/Home/banner.vue";
import homefoor from "./../../../components/Home/foor.vue";
import homebags from "./../../../components/Home/bags";

import { mapActions, mapState } from "vuex";

export default {
  name: "Index",

  components: {
    Header,
    homebanner,
    homefoor,
    homebags
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
.page-index {
  background-color: #e5e5e5;
  padding-top: 2.875rem;

  .page-index-content {
    > div {
      margin-bottom: 0.5rem;
      background-color: #fff;
    }
  }

  // banner
  .page-index-banner {
    height: 12.5rem;
    padding: 1.25rem 0;
    box-sizing: border-box;
  }
}
</style>
