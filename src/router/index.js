import { createRouter, createWebHistory } from 'vue-router'

import TablesView from '../view/TablesView.vue'
// import ReservationsView from '../view/ReservationsView.vue'

const routes = [
  { path: '/', component: TablesView },
//   { path: '/reservations', component: ReservationsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router