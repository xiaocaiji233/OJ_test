import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Practice from '../views/Practice.vue'
import Userinfo from '../views/UserInformation.vue'
import Writetimu from '../views/Wirtetimu.vue'
import Timu from '../views/Timu.vue'
import Writetimuu from '../views/Writetimuu.vue'
import Tubiao from '../views/Tubiao.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Timu',
    name: 'Timu',
    component: Timu
  },
  {
    path: '/Tubiao',
    name: 'Tubiao',
    component: Tubiao
  },
  {
    path: '/Writetimu',
    name: 'Writetimu',
    component: Writetimu
  },
  {
    path: '/Writetimuu',
    name: 'Writetimuu',
    component: Writetimuu
  },
  {
    path: '/Practice',
    name: 'Practice',
    component: Practice
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/Userinfo',
    component: Userinfo
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
