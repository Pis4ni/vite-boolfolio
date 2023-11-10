import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../pages/AppHome.vue";
import Portfolio from "../pages/Portfolio.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    // {
    //   path: "/id",
    //   name: "ProjectDetail",
    //   component: ProjectDetail,
    // },
  ],
});
export { router };
