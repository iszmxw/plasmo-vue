// router.js

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/json-format',
    component: () => import('../views/JsonFormat.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
