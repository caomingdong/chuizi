import axios from "axios";
import router from "@/router";
import { Toast } from "vant";

const state = {
  userInfo: window.localStorage.getItem("userInfo")
    ? JSON.parse(window.localStorage.getItem("userInfo"))
    : null
};

const getters = {};

const mutations = {
  
  setUserInfo(state, payload) {
    state.userInfo = payload.info;
  },

};

const actions = {
  /** 
   * 注册
  */
  handleRegister(context,payload){
    Toast.loading({ duration: 0, message: "注册中..." });
    console.log(payload);
    axios.post("http://localhost:9090/sign-up", payload).then(response=>{
      Toast.clear();
      let res=response.data;
        if(res.code===0){ 
        Toast("注册成功");  
        setTimeout(()=>{
          router.replace("./Login");
        },1000)
       }else{
        Toast("用户名已存在");
       }
    })
  },
  /**
   * 登录
   */
  handleLogin(context, payload) {
    Toast.loading({ duration: 0, message: "加载中..." });
    console.log(payload);
    axios.post("http://localhost:9090/sign-in", payload).then(response => {
      Toast.clear();
      let res = response.data;

      if (res.code === 0) {
        // 登录成功
        // 本地存储
        window.localStorage.setItem("userInfo", JSON.stringify(res.data));
        // 提交 mutation
        context.commit({ type: "setUserInfo", info: res.data });
        // 给个提示
        Toast("登录成功");
        // 跳转 注意不能使用 this.$router
        setTimeout(() => {
          // 1. 看看登录页面有没有 redirect 这个参数
            // console.log(router);
          let redirect = router.currentRoute.query.redirect || "/user";
          router.replace(redirect);
        }, 1000);
      } else {
        // 登录失败
        Toast(res.msg);
      }
    });
  },
 
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
