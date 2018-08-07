import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Discover from '@/pages/Discover.vue'
import Order from '@/pages/Order.vue'
import Mine from '@/pages/Mine.vue'
import Search from '@/components/home/Search'

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
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '**',
      component: Home
    },
  ]
})
