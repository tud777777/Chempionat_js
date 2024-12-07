import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from "@/views/RegistrationView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import AuthView from "@/views/AuthView.vue";
import MissionsView from "@/views/MissionsView.vue";
import AddMissionView from "@/views/AddMissionView.vue";
import EditMissionView from "@/views/EditMissionView.vue";
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        forAuth: true,
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/missions',
      name: 'missions',
      component: MissionsView,
      meta: {
        forAuth: true,
      }
    },
    {
      path: '/add-mission',
      name: 'add-mission',
      component: AddMissionView,
      meta: {
        forAuth: true,
      }
    },
    {
      path: '/edit-mission/:id',
      name: 'edit-mission',
      component: EditMissionView,
      meta: {
        forAuth: true,
      }
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      meta: {
        forAuth: true,
      }
    },
  ],
})
router.beforeResolve(async to =>{
  if(to.meta.forAuth && !localStorage.getItem('user-token'))
  {
    await router.replace('/auth')
  }
})
export default router
