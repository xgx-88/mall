import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
Vue.use(VueRouter);
const More = () => import("@/views/more/More.vue");
const Shopcart = () => import("@/views/shopcart/Shopcart.vue");
const Profile = () => import("@/views/profile/Profile.vue");
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
