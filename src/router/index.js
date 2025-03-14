import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from '../components/products/ProductsList.vue';
import ProductView from '../components/products/ProductView.vue';
import CartView from '../components/cart/CartView.vue';
import LoginView from '../components/auth/LoginView.vue';
import RegisterView from '../components/auth/RegisterView.vue';
import ProfileView from '../components/settings/ProfileView.vue';
import SettingsView from '../components/settings/SettingsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductsList,
  },
  {
    path: '/category/:category',
    name: 'ProductsList',
    component: ProductsList,
    props: true,
  },
  {
    path: '/product/:productId',
    name: 'ProductView',
    component: ProductView,
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next({ name: 'LoginView' });
      }
    },
  },
  {
    path: '/settings',
    name: 'SettingsView',
    component: SettingsView,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next({ name: 'LoginView' });
      }
    },
  },
  { path: '/:notFound(.*)', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
