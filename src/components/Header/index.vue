<template>
  <div class="cz-header">
    <ul>
      <li class="cz-header-left">
        <a href="###" class="iconmenu"></a>
      </li>
      <li class="cz-header-mid">
        <a href="#" class="iconlogo"></a>
      </li>
      <li class="cz-header-right">
        <a href="###"></a>
      </li>
    </ul>

    <div class="cz-header-pullDown">
      <pullDownHeader></pullDownHeader>
    </div>
  </div>
</template>
<script>
import pullDownHeader from "./pull-down/index";
export default {
  name: "Header",
  components: {
    pullDownHeader
  }
};
</script>
<style lang="scss">
.cz-header {
  height: 50px;
  width: 100%;
  background-color: #1d1d1d;
  position: relative;
  ul {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .cz-header-left {
    width: 50px;
    height: 50px;
    a {
      width: 50px;
      height: 50px;
      display: inline-block;
      background-position: -50px 344px;
      background-size: cover;
    }
  }
  .cz-header-mid {
    width: 50px;
    height: 50px;
    a {
      width: 50px;
      height: 50px;
      display: inline-block;
      background-position: 54px 0px;
      background-size: cover;
    }
  }
  .cz-header-right {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url("./../../assets/images/search.png");
      background-size: cover;
    }
  }
}
.cz-header-pullDown {
  position: absolute;
  display: none;
  width: 100%;
  height: 684px;
  top: 50px;
  left: 0;
  background-color: #ccc;
}
</style>
