<template>
  <div class="cz-header">
    <a href="###" class="iconmenu cz-header-left"></a>
    <a href="###" class="iconmenu cz-header-mid"></a>
    <a href="###" class="iconmenu cz-header-right"></a>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="scss">
.cz-header {
  height: 50px;
  width: 100%;
  background-color: #3d3f3c;
  display: flex;
  overflow: hidden;
  .cz-header-left {
    width: 50px;
    height: 50px;
    background-position: -50px 344px;
    background-size: cover;
  }
  .cz-header-mid {
    width: 50px;
    height: 50px;
    background-position: -50px 344px;
    background-size: cover;
  }
  .cz-header-right {
    width: 50px;
    height: 50px;
    background-position: -50px 344px;
    background-size: cover;
  }
}
</style>
