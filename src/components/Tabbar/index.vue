<template>
  <div class="cz-tabbar">
    <ul class="cz-tabbar_bot">
      <li v-for="tab in tabdata" :key="tab.id">
        <router-link :to="tab.href">
          <i class="iconfont" :class="tab.icon"></i>
          <span>{{ tab.text }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  props: {
    tabdata: Array
  }
}
</script>
<style lang="scss">
.cz-tabbar {
  height: 50px;
  width: 100%;
  display: flex;
  -moz-box-shadow: -1px -10px 10px #d9d4d4;
  -webkit-box-shadow: -1px -10px 10px #d9d4d4;
  box-shadow: -1px -2px 10px #d9d4d4;
  .cz-tabbar_bot {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
  }

  li {
    flex: 1;
    user-select: none;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #cccccc;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #8f918f;
      }
    }
    .iconfont {
      font-size: 24px;
      max-height: 24px;
    }
  }
}
.cz-tabbar_bot li a:focus {
  background: #f3f1ef;
  background: -webkit-linear-gradient(to bottom, #f3f1ef, #ffffff);
  background: linear-gradient(to bottom, #f3f1ef, #ffffff);
}
</style>
