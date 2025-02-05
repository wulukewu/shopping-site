import { createRouter, createWebHistory } from "vue-router";
import ProductsList from "../components/products/ProductsList.vue";
import ProductView from "../components/products/ProductView.vue";
import CartView from "../components/cart/CartView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductsList,
  },
  {
    path: "/category/:category",
    name: "ProductsList",
    component: ProductsList,
    props: true,
  },
  {
    path: "/product/:productId",
    name: "ProductView",
    component: ProductView,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory("/shopping-site/"),
  routes,
});

export default router;
