import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from '../auth/authGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/surveys/:id?',
    name: 'Surveys',
    component: () =>
      import(/* webpackChunkName: "surveys" */ '../views/Surveys.vue')
  },
  {
    path: '/surveys/:id',
    name: 'SurveyView',
    component: () =>
      import(/* webpackChunkName: "survey_view" */ '../views/SurveyView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () =>
      import(/* webpackChunkName: "create" */ '../views/Create.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
