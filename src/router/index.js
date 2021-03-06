import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Quiz from '../views/Quiz.vue'
import About from '../views/About'
import ReactionGame from '../views/ReactionGame'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/reactiongame',
    name: 'reactionGame',
    component: ReactionGame
  },

  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 };
  }
})

export default router
