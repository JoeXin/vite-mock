import { createRouter, createWebHistory } from 'vue-router';

import Login from '../../pages/login.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
