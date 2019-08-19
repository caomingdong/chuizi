# 开始———

## 远程仓库: github

    - https://github.com/caomingdong/chuizi.git

#### 使用: git flow init 管理仓库

    - 一种用于管理仓库的思想

#### 页面跳转

    - 1、无

## 路由定义

#### 一级路由:

| 路径          | 组件名(name) | 名字     |
| ------------- | ------------ | -------- |
| /             | Home         | 主界面   |
| /item/:itemId | Item         | 详情页   |
| /search       | Search       | 搜索页   |
| /order/list   | Order        | 我的订单 |
| /address/list | Aaddress     | 地址列表 |
| /address/add  | NewAaddress  | 新增地址 |
| /login        | Login        | 登录页   |
| /account      | Account      | 账户详情 |

#### 二级路由:

| 路径      | 组件名   | 它的父级 | 名字       |
| --------- | -------- | -------- | ---------- |
| /category | Category | /        | 分类页     |
| /cart     | Cart     | /        | 购物车页面 |
| /user     | User     | /        | 我的       |
| /floor    | Floor    | /        | 商品列表页 |
