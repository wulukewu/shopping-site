import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from '../components/products/ProductsList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductsList,
  },
  {
    path: '/products/:category',
    name: 'ProductsList',
    component: ProductsList,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory('/shopping-site/'),
  routes,
});

export default router;