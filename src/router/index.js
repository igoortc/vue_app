import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/logged-in',
      name: 'List',
      component: List
    }
  ]
})
