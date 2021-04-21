import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Live from '../views/Live.vue'
import Market from '../views/Market.vue'
import Tickets from '../views/Tickets.vue'
import Operate from '../views/Operate.vue'
import Tourist from '../views/Tourist.vue'
import Emergency from '../views/Emergency.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    to: '/live',
    name: '实时监测',
    component: Live
  },
  {
    to: '/tickets',
    name: '票务信息',
    component: Tickets
  },
  {
    to: '/market',
    name: '营销数据',
    component: Market
  },
  {
    to: '/operate',
    name: '运营数据',
    component: Operate
  },
  {
    to: '/tourist',
    name: '用户画像',
    component: Tourist
  },
  {
    to: '/emergency',
    name: '应急事件',
    component: Emergency
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
