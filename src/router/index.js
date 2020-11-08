import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //메인 홈화면
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/upperBody',
    name: 'upperBody',
    component: () => import('../views/UpperBody.vue')
  },
  {
    path: '/lowerBody',
    name: 'lowerBody',
    component: () => import('../views/LowerBody.vue')
  },
]

const router = new VueRouter({
    scrollBehavior() {
      return { x: 0, y: 0 }
    },
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router