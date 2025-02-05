import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "./components/products/ProductsList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ProductsList },
    {
      path: "/products/:category",
      name: "ProductsList",
      component: ProductsList,
      props: true,
    },
  ],
  linkActiveClass: "active",
});

export default router;
