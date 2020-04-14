import Vue from 'vue'
import Router from 'vue-router'
import AdminMenu from '@/views/AdminMenu.vue'
import Rooms from '@/components/Rooms.vue'
import Tenants from '@/components/Tenants.vue'
import Discounts from '@/components/Discounts.vue'
import Reports from '@/components/Reports.vue'
import Settings from '@/components/Settings.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AdminMenu',
      component: AdminMenu,
      redirect: '/rooms',
      props: true,
      children: [
        {
          path: '/rooms',
          name: 'rooms',
          component: Rooms
        },
        {
          path: '/tenants',
          name: 'tenants',
          component: Tenants
        },
        {
          path: '/discounts',
          name: 'discounts',
          component: Discounts
        },
        {
          path: '/reports',
          name: 'reports',
          component: Reports
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings
        },
      ]
    }
  ]
})

export default router;