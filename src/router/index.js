import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
const More = () => import("../views/More.vue");
const Shopcart = () => import("../views/Shopcart.vue");
const Profile = () => import("../views/Profile.vue");
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/more",
    component: More,
  },
  {
    path: "/shopcart",
    component: Shopcart,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
