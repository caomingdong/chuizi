# 开始———

### 路由定义

#### 页面跳转

1、无

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
