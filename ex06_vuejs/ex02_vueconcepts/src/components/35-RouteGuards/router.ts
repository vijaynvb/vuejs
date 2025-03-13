// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashborad.vue';
import Login from './views/Login.vue';

// Fake authentication state
const isAuthenticated = true;

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      console.log('Checking route guard before entering Dashboard...');
      if (isAuthenticated) {
        next(); // Allow access
      } else {
        next('/login'); // Redirect to login
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  console.log(`Navigating from ${from.path} to ${to.path}`);
  next(); // Continue navigation
});

// Handling Navigation Failures
router.afterEach((to, from, failure) => {
  if (failure) {
    console.error('Navigation Failed:', failure);
  }
});

export default router;
