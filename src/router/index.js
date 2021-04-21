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
    path: '/live',
    name: '实时监测',
    component: Live
  },
  {
    path: '/tickets',
    name: '票务信息',
    component: Tickets
  },
  {
    path: '/market',
    name: '营销数据',
    component: Market
  },
  {
    path: '/operate',
    name: '运营数据',
    component: Operate
  },
  {
    path: '/tourist',
    name: '用户画像',
    component: Tourist
  },
  {
    path: '/emergency',
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
