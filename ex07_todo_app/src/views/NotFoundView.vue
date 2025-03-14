<script setup>
import { RouterLink, useRoute ,useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const accessiblePaths = router.options.routes
  .filter(route => !route.meta || !route.meta.requiresAuth) // Filter routes
  .map(route => route.path);
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-yellow-500 text-7xl mb-5"></i>
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <RouterLink
      :to="accessiblePaths.includes(route.path) ? '/login' : '/'"
      class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
    >
      Go Back
    </RouterLink>
  </section>
</template>
