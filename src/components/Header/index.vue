<template>
  <div class="cz-Header">
    <!-- <van-button type="primary" @click="showPopup">展示弹出层</van-button> -->
    <van-popup v-model="show" position="top" :style="{ height: '50%' }">
      <ul class="cz-Header-nav">
        <li v-for="item in czHeadernav" :key="item.id">
          <i class="iconfont" :class="item.icon"></i>
          <a href="###">{{ item.name }}</a>
        </li>
      </ul>
    </van-popup>
    <van-nav-bar title="标题" fixed @click-left="showPopup" @click-right="showSeach">
      <van-icon class="iconmenu icon-left" slot="left" />
      <van-icon class="iconlogo icon-title" slot="title" />
      <van-icon class="iconfont icon-fangdajing" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false
    };
  },

  props: {
    czHeadernav: Array,
    headername: String
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    showSeach() {
      //跳转搜索页面
      this.$router.replace("/search");
    }
  }
};
</script>
<style lang="scss">
.cz-Header {
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  .van-nav-bar__right {
    width: 3.125rem;
    height: 3.125rem;
    right: 0.5rem;
    .iconfont {
      margin-top: 0.4375rem;
      font-size: 2.125rem;
    }
  }
  .van-nav-bar {
    background-color: #1d1d1d;
    color: #eeeeee;
  }
  .van-nav-bar__left {
    left: 0;
    .icon-left {
      width: 3.125rem;
      height: 3.125rem;
      display: inline-block;
      background-position: -50px 347px;
      background-size: cover;
    }
  }
  .van-nav-bar__title {
    font-size: 1.125rem;
    font-weight: 800;
    .icon-title {
      width: 3.125rem;
      height: 3.125rem;
      display: inline-block;
      background-position: 54px 0px;
      background-size: cover;
    }
  }
  .van-nav-bar__title,
  .van-icon,
  .van-nav-bar__text {
    color: #eeeeee;
  }
  // 下拉框
  .van-popup {
    background-color: #1d1d1dce;
    transition: 0.5s ease-out;
    .cz-Header-nav {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
