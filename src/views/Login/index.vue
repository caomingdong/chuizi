<template>
  <div class="page-login">
     <div class="header">
     <div class="title">登录官网</div>
    </div>
    <div class="page-for-center">
    </div>

  </div>
</template>

<style lang="scss" scoped>
.page-login .header {
    background: #1d1d1d;
    height: 50px;  
     .title{
        color: #fff;
        font-size: 18px;
        line-height: 20px;
        padding: 16px 0 0;
        text-align: center;
        top: 0;
        left: 60px;
        right: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
   }
}
.page-login {
   display: flex;
  flex-direction: column;
  height: 100%;
}
.page-for-center {
   padding:7px 6px;
   background-color: #e5e5e5;
   flex: 1;
   overflow-y:auto;
}
</style>