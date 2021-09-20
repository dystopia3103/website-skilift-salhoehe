import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ueber-uns',
    name: 'About',
    component: About,
  },
  {
    path: '/kontakt-und-anfahrt',
    name: 'Contact',
    component: Contact,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
