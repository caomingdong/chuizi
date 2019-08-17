import Vue from "vue";

//路由
import Router from "vue-router";
import VueRouter from "vue-router";




Vue.use(Router);

const routes = [
  //对象 ==  路由
  //1级
  {
    path: "/",
    component: () => import("./views/Home/index.vue"),
    children: [
      //2级
      {
        path: "category",
        component: () => import("./views/Home/Category.vue")
      },
      {
        path: "cart",
        component: () => import("./views/Home/Cart.vue")
      },
      {
        path: "user",
        component: () => import("./views/Home/User.vue")
      },
      {
        path: "floor",
        component: () => import("./views/Home/Floor.vue")
      }
    ]
  },
  {
    path: "/item/:itemId",
    component: () => import("./views/Item/index.vue")
  },
  {
    path: "/search",
    component: () => import("./views/Search/index.vue")
  },
  {
    path: "/login",
    component: () => import("./views/Login/index.vue")
  },
  {
    path: "/order/list",
    component: () => import("./views/Order/index.vue")
  },
  {
    path: "/address/list",
    component: () => import("./views/Aaddress/index.vue")
  }
]


export default new VueRouter({
  routes: routes
});
