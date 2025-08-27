import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Cats from './components/Cats.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cats', component: Cats },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
