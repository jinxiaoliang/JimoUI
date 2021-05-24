import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

function load (component) {
  return resolve => require([`../views/${component}.vue`], resolve)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: load('home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
