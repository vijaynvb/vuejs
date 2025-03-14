<script setup>
import { RouterLink, useRoute , useRouter } from 'vue-router';
import logo from '@/assets/img/logo.png';

const route = useRoute();
const router = useRouter();
const isActiveLink = (routePath) => route.path === routePath;

const accessiblePaths = router.options.routes
  .filter(route => !route.meta || !route.meta.requiresAuth) // Filter routes
  .map(route => route.path);

const logout = () => {
  localStorage.removeItem('token'); // Remove token
  router.push('/login'); // Redirect to login
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
         <!-- Logo (Disable Link on Login Page) -->
        <template v-if="accessiblePaths.includes(route.path)">
          <RouterLink class="flex flex-shrink-0 items-center mr-4">
            <img class="h-10 w-auto" :src="logo" alt="Todo Application" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Todo Application</span
            >
          </RouterLink>
        </template>
        <template v-else>
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Todo Application" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">
              Todo Application
            </span>
          </RouterLink>
        </template>

          <!-- Navigation Links (Hide if on /login) -->
          <div v-if="!accessiblePaths.includes(route.path)" class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/todos"
                :class="[
                  isActiveLink('/todos')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Todos</RouterLink
              >
              <RouterLink
                to="/todos/add"
                :class="[
                  isActiveLink('/todos/add')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Add Todo</RouterLink
              >
              <RouterLink
                to="/teams-todos"
                :class="[
                  isActiveLink('/teams-todos')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Teams Todo</RouterLink
              >
              <!-- Logout Button (Replaces RouterLink) -->
              <button
                @click="logout"
                class="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
