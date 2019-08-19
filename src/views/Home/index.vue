<template>
  <!-- 
    这里是首页
  -->
  <div class="page-home">
    <router-view></router-view>
    <Tabbar :tabdata="tabdata"></Tabbar>
  </div>
</template>

<script>
//模块引入
import Tabbar from "../../components/Tabbar/index";

export default {
  name: "Home",

  components: {
    Tabbar
  },
  data() {
    return {
      tabdata: [
        {
          id: 1,
          text: "首页",
          icon: "icon-shouye",
          href: "Index"
        },
        {
          id: 2,
          text: "分类",
          icon: "icon-tubiao13",
          href: "category"
        },
        {
          id: 3,
          text: "购物车",
          icon: "icon-shopping",
          href: "cart"
        },
        {
          id: 4,
          text: "个人中心",
          icon: "icon-gerenzhongxin",
          href: "user"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.page-home > div:nth-child(1) {
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 46px;
  flex: 1;
}
</style>
