<template>
  <!-- 轮播图 -->
  <div class="home-banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <a>
            <img :src="item.img" />
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" v-if="pagination"></div>

      <!-- 如果需要导航按钮 -->
      <template v-if="navigation">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </template>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "banner",

  // 动态数据传输
  props: {
    // 轮播图地址
    imgs: Array,
    //页码
    pagination: {
      type: Boolean,
      default: true
    },
    // 左右按钮
    navigation: Boolean
  },

  // 方法
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        pagination: this.pagination
          ? {
              el: ".swiper-pagination"
            }
          : {},
        navigation: this.navigation
          ? {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          : {}
      });
    }
  },

  // 生命周期函数

  updated() {
    this.initSwiper();
  }
};
</script>

<style lang="scss">
.swiper-container {
  height: 161px;
  .swiper-slide {
    background-color: #ccc;
  }
}
</style>

