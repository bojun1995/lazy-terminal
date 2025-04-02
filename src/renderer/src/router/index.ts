import { createRouter, createWebHistory } from 'vue-router'

import DefaultRoute from '@renderer/views/default-route.vue'

const routes = [
  {
    path: '/default',
    component: DefaultRoute
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
