<template>
  <div class="page-item-footer">
    <div class="footer-box">
      <router-link to="/cart" class="iconfont icon-shopping"></router-link>
      <a href="#" class="aYan">
        <span>现在购买</span>
      </a>
      <a href="#" class="aYan">
        <span>加入购物车</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerList"
};
</script>

<style lang="scss">
.footer-box {
  box-shadow: 0 -11px 27px rgba(0, 0, 0, 0.08);
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 3.58rem;
  z-index: 1111;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4%;
  a:nth-child(1) {
    font-size: 30px;
    margin: 0 0.7%;
    width: 3.254881rem;
    text-align: center;
  }
  .aYan {
    border-radius: 0.28571rem;
    border: 1px solid #e0e0e0;
    font-size: 1.125rem;
    font-weight: 700;
    color: #8c8c8c;
    line-height: 2.5rem;
    text-align: center;
    width: 9.0625rem;
    height: 2.5rem;
  }
  a:nth-child(3) {
    border: 1px solid #3f6aec;
    background: linear-gradient(#6e98f4, #4b77ee);
    color: #fff;
    margin-right: 0.5rem;
  }
}
</style>
