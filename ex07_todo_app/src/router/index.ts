import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import TodosView from '@/views/TodosView.vue';
import TodoView from '@/views/TodoView.vue';
import AddTodoView from '@/views/AddTodoView.vue';
import EditTodoView from '@/views/EditTodoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosView,
      meta: { requiresAuth: true },
    },
    {
      path: '/todos/:id',
      name: 'todos-id',
      component: TodoView,
      meta: { requiresAuth: true },
    },
    {
      path: '/todos/add',
      name: 'add-todo',
      component: AddTodoView,
      meta: { requiresAuth: true },
    },
    {
      path: '/todos/edit/:id',
      name: 'edit-todo',
      component: EditTodoView,
      meta: { requiresAuth: true },
    },
    {
      path: '/teams-todos',
      name: 'not-found',
      component: NotFoundView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: NotFoundView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

// Global Navigation Guard to protect routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user has a token

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Allow navigation
  }
});

export default router;
