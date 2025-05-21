import { createRouter, createWebHistory } from 'vue-router'

import HomeComponent from '../components/HomeComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import RegisterComponent from '../components/RegisterComponent.vue'
import UserComponent from '../components/UserTaskComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '/Login',
    name: 'login',
    component: LoginComponent,
  },
    {
    path: '/Register',
    name: 'register',
    component: RegisterComponent,
  },
  {
    path: '/User',
    name: 'user',
    component: UserComponent,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
