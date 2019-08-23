<template>
  <!-- 
    这里是我的订单
    /order/list
  -->
  <div class="page-order">
    <span>购买成功</span>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<style lang="scss">
.page-order {
  background: #ccc;
  position: relative;
  width: 100%;
  height: 100%;
  span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: block;
    background: #fff;
    border-radius: 10px;
    width: 200px;
    height: 200px;
    text-align: center;
    font-size: 33px;
    font-weight: 600;
    color: firebrick;
    padding-top: 35px;
    box-sizing: border-box;
  }
  a {
    padding: 10px;
    left: 6px;
    background: linear-gradient(#131313, #070707);
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 12px;
    height: 32px;
    line-height: 1;
    position: absolute;
    top: 55%;
    left: 40%;
    transform: translateY(-50%);
    &::after {
      background: linear-gradient(#2a2a29, #151515);
      box-shadow: inset 0 1px 1px hsla(0, 0%, 100%, 0.1),
        inset 0 0 1px rgba(0, 0, 0, 0.5);
      border-radius: 3px;
      content: " ";
      position: absolute;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
      z-index: -1;
    }
  }
}
</style>
