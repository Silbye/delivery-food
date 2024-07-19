import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Restaurant from "../views/RestaurantView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/restaurants/:name",
      component: Restaurant,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
