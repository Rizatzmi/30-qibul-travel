import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/HomeView.vue";
import Blog from "@/views/Blog.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
  ],
});
