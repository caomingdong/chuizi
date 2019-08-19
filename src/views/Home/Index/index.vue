<template>
  <!-- 
    这里是首页
  -->
  <div class="page-index">
    <Header></Header>
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
    return {
      czHeadernav: [
        {
          id: 1,
          name: "锤子商城",
          icon: "icon-shangcheng"
        },
        {
          id: 2,
          name: "坚果 Pro 2S",
          icon: "icon-shoujicellphone57"
        },
        {
          id: 3,
          name: "坚果 R1",
          icon: "icon-phone"
        },
        {
          id: 4,
          name: "坚果 TNT 工作站",
          icon: "icon-pc"
        },
        {
          id: 5,
          name: "坚果 3",
          icon: "icon-shouji"
        },
        {
          id: 6,
          name: "坚果 Pro 2S",
          icon: "icon-shoujicellphone57"
        },
        {
          id: 7,
          name: "应用",
          icon: "icon-chuizi"
        },
        {
          id: 8,
          name: "论坛",
          icon: "icon-shoujicellphone57"
        },
        {
          id: 9,
          name: "服务支持",
          icon: "icon-fuwu2"
        }
      ]
    };
  }
};
</script>
