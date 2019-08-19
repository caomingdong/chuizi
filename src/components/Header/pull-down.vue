<template>
  <div class="pullDown">
    <van-nav-bar title="标题" fixed>
      <van-icon class="iconfont icon-fangdajing" slot="right" />
      <van-icon class="iconmenu icon-left" slot="left" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "pullDown"
};
</script>
<style lang="scss">
.pullDown {
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  .van-nav-bar__right {
    width: 50px;
    height: 50px;
    right: 8px;
    .iconfont {
      margin-top: 7px;
      font-size: 34px;
    }
  }

  .van-nav-bar {
    background-color: #1d1d1d;
    color: #eeeeee;
  }
  .van-nav-bar__left {
    left: 0;
    .icon-left {
      width: 50px;
      height: 50px;
      display: inline-block;
      background-position: -50px 347px;
      background-size: cover;
    }
  }

  .van-nav-bar__title {
    font-size: 18px;
    font-weight: 800;
  }
  .van-nav-bar__title,
  .van-icon,
  .van-nav-bar__text {
    color: #eeeeee;
  }
}
</style>
