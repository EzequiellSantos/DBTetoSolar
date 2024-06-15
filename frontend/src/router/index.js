import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/inverters',
    name:'inverters',
    component: () => import(/* webpackChunkName: "inverters" */ '../views/Inverters.vue')
  },
  {
    path: '/logs',
    name:'logs',
    component: () => import(/* webpackChunkName: "logs" */ '../views/Logs.vue')
  },
  {
    path: '/register',
    name:'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
