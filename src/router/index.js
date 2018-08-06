import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Discover from '@/components/Discover.vue'
import Order from '@/components/Order.vue'
import Mine from '@/components/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '**',
      component: Home
    },
  ]
})
