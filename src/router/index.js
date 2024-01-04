import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CocktailPage from "@/pages/CocktailPage.vue";
import CocktailRandom from "@/pages/CocktailRandom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomePage,
    },
    {
      path: "/cocktails/:rid",
      name: "cocktailPage",
      component: CocktailPage,
    },
    {
      path: "/random",
      name: "cocktailRandom",
      component: CocktailRandom,
    },
  ],
});

export default router;
