import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/components/pages/Home";
import Search from "@/components/pages/Search";
import Login from "@/components/pages/Login";
import Register from "@/components/pages/Register";
import Detail from "@/components/pages/Detail";
import AddCartSuccess from "@/components/pages/AddCartSuccess";
import ShopCart from "@/components/pages/ShopCart";
export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      name: "detail",
      path: "/detail/:skuid?",
      component: Detail,
      meta: { show: false },
    },
    {
      name: "add",
      path: "/addcartsuccess",
      component: AddCartSuccess,
      meta: { show: true },
    },
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
      meta: { show: true },
    },

  ],
});
