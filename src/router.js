import Vue from "vue";
import store from "./store";
//路由
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //对象 ==  路由
  //1级
  {
    path: "/",
    component: () => import("./views/Home/index.vue"),
    children: [
      {
        path: "Index",
        component: () => import("./views/Home/Index/index.vue")
      },
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
      },
      {
        path: "",
        redirect: "/Index"
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
    path: "/register",
    component: () => import("./views/Login/register.vue")
  },
  {
    path: "/login",
    component: () => import("./views/Login/index.vue")
  },
  {
    path: "/money",
    component: () => import("./views/Login/money.vue"),
    meta: {
      needLogin: true
    }
  },
  {
    path: "/order/list",
    component: () => import("./views/Order/index.vue"),
    meta: {
      needLogin: true
    }
  },
  {
    path: "/address/list",
    component: () => import("./views/Aaddress/index.vue")
  },
  {
    path: "*",
    redirect: "/Index"
  }
];

const router = new VueRouter({
  routes: routes
});

router.beforeEach((to, from, next) => {
  // 判断将要去的路由是否需要登录状态
  if (to.meta.needLogin) {
    // 登录状态的校验
    if (store.state.user.userInfo) {
      // 放行
      next();
    } else {
      // 不存在，去登录
      next({
        path: "/Login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;
