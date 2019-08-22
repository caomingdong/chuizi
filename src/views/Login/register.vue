<template>
  <div class="page-login">
     <div class="header">
       <div class="title">注册 Smartisan ID</div>
     </div>
     <div class="page-for-center">
      <van-cell-group class="styleforcell">
         <van-field v-model="username" placeholder="手机号/邮箱" />
      </van-cell-group>
       <van-cell-group class="styleforcell">
         <van-field v-model="password" placeholder="密码" />
      </van-cell-group>
      <div class="register-line" >
         <label class="u-check"> 
            <input type="checkbox" v-model="autologin">
            <span>
             <i class="iconfont icon-gou" v-if="autologin"></i>
             <i class="iconfont icon-gou1" v-else></i>
             </span>
         </label>
         <span class="auto-login">我已阅读并同意遵守法律声明和隐私条款</span>

      </div>
      <van-button color="#5178df" size="large"
       :disabled="!username || !password||!autologin"
      @click="handleRegister({username,password})" 
      >注册</van-button>

       <div class="phonelogin">
          <router-link to="/register">
          <i>国际手机号登录</i>
          <span class="iconfont icon-youjian"></span>
          </router-link>
          </div>
    </div>
    <!--中间部分-->
  </div>
</template>
<script>
import {mapActions} from "vuex"
   export default{
     name:"Login",
      data(){
         return {
            username:'',
            password:'',
            autologin:1
         }
      },
      methods:{
         ...mapActions("user",["handleRegister"])
      }
   }


</script>

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
   padding:10px 8px;
   background-color: #e5e5e5;
   flex: 1;
   overflow-y:auto;
   .styleforcell{
      height:3rem;
      font-size: 20px;
   }
   .register-line{
      padding:1rem .8rem;  
      font-size:14px;
      .icon-gou{
         color:#7199f3;
      }
      .auto-login{
         margin-left:1rem;   
      }
   }
   .phonelogin {
      float: right;
      margin-top:1rem;
      i{
         font-style: normal;
         font-size:14px;
      }
   }
}

.u-check {
   position: relative;
   display: inline-block;
   width: 16px;
   height: 16px; 
    input {
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    span {
    position: absolute;
    top:3px;
    left: 0;
    width: 100%;
    height: 100%;
    }
}
 

</style>