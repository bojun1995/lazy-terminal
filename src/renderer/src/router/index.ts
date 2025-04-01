import { createRouter, createWebHistory } from 'vue-router';

import Default from '@renderer/views/Default.vue';

const routes = [
  {
    path: '/default',
    component: Default
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
