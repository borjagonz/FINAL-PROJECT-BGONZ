import { createRouter, createWebHistory } from 'vue-router'

import HomeComponent from '../components/HomeComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import RegisterComponent from '../components/RegisterComponent.vue'
import UserComponent from '../components/UserTaskComponent.vue'
import DashboardComponent from '../components/DashboardComponent.vue'

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
  {
    path: '/dashboard',
    component: DashboardComponent,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

import { supabase } from '@/supabase'
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) next('/login')
    else next()
  } else {
    next()
  }
})

export default router
