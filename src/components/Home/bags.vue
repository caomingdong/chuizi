<template>
  <div class="home-bags">
    <a class="home-bags-header" href="###">
      <span>热销商品</span>
      <i class="iconfont icon-youjian"></i>
    </a>
    <div class="home-bags-commer">
      <ul class="home-bags-commer-list">
        <li v-for="(item, index) in 5" :key="index">
          <span>
            <img src alt />
          </span>
          <p>{{ index }}</p>
          <p>{{ index }}</p>
          <p>{{ index }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-bags',

  props: {
    bagsList: Array
  }
}
</script>

<style lang="scss">
@import './../../assets/styles/common/mixins.scss';

.home-bags {
  width: 100%;
  display: flex;
  flex-direction: column;
  .home-bags-header {
    @include home--header;
  }
}
</style>
