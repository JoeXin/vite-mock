import { createRouter, createWebHistory } from 'vue-router';

import Login from '../pages/login.vue';
import Home from '../pages/home/home.vue';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router