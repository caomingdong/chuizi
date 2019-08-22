<template>
  <div class="page-item-list-header">
    <div @click="back()">
      <span> <i class="iconfont icon-ico_leftarrow"></i>返回 </span>
    </div>
    <h1>{{ itemHeaderLists }}</h1>
  </div>
</template>

<script>
export default {
  name: 'itemHeader',
  methods: {
    back() {
      this.$router.back()
    }
  },
  props: {
    itemHeaderLists: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.page-item-list-header {
  background: #1d1d1d;
  background-image: linear-gradient(#1d1d1d, #181818);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
  div {
    span {
      padding: 10px 10px 0 20px;
      left: 6px;
      background: linear-gradient(#131313, #070707);
      color: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 12px;
      height: 32px;
      line-height: 1;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &::after {
        background: linear-gradient(#2a2a29, #151515);
        box-shadow: inset 0 1px 1px hsla(0, 0%, 100%, 0.1),
          inset 0 0 1px rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        content: ' ';
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: 1px;
        right: 1px;
        z-index: -1;
      }
      i {
        position: absolute;
        top: 9px;
        left: 3px;
        transform: scale(0.7);
      }
    }
  }
  h1 {
    width: 255px;
    color: #fff;
    font-size: 18px;
    line-height: 20px;
    padding: 16px 0 0;
    text-align: center;
    position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
