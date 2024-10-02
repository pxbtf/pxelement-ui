import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '../views/ButtonView.vue'
import CardView from '../views/CardView.vue'
import DialogView from '../views/DialogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dialog',
      component: DialogView
    },
    {
      path: '/card',
      name: 'card',
      component: CardView
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
