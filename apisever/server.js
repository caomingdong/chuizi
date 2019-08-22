/* eslint-disable */
const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/chuizi";

// 引入 controller

const userController = require("./controllers/user");

// 创建 express 实例
const server = express();

// 链接 mongodb
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("链接数据库成功吼吼");
  })
  .catch(error => {
    console.log(error);
    console.log("链接数据库失败，失败了");
  });

// 各种中间件的使用与配置
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
//静态资源托管
server.use(express.static("public"));
//设置解决跨域问题
server.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "content-type");
  next();
});
// 路由的设置
server.post("/sign-up", userController.postSignUp); // 注册
server.post("/sign-in", userController.postSignIn); // 登录
// server.post("/user/profile",userController.postUpdAvatar)

// 监听端口
server.listen(9090);
