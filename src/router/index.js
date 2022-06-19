import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import HomeView from '../views/HomeView.vue'
import PricePage from '../views/PricePage.vue'
import CommPage from '../views/CommPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/PricePage',
    name: 'price',
    component: PricePage
  },
  {
    path: '/CommPage',
    name: 'comm',
    component: CommPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
