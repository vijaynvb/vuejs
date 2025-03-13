// router.js
import { createRouter, createMemoryHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import User from './views/User.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/user/:username', name: 'profile', component: User },
  ],
})

export default router
