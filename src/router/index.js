import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../pages/AppHome.vue";
import Portfolio from "../pages/PortfolioPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import ProjectTypePage from "../pages/PortfolioTypePage.vue";

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
      name: "PortfolioPage",
      component: Portfolio,
    },
    {
      path: "/portfolio/:id",
      name: "ProjectPage",
      component: ProjectPage,
    },
    {
      path: "/portfolio/type/:type_id",
      name: "Project-by-type",
      component: ProjectTypePage,
    },
  ],
});
export { router };
