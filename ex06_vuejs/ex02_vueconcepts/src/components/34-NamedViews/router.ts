import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

const routes = [
  {
    path: '/',
    components: {
      default: Home,    // Default component for <router-view>
      header: Header,   // Named View for <router-view name="header">
      sidebar: Sidebar, // Named View for <router-view name="sidebar">
      content: Content  // Named View for <router-view name="content">
    }
  },
  {
    path: '/about',
    components: {
      default: About,
      header: Header,
      sidebar: Sidebar,
      content: Content
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
