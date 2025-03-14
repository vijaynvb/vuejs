<script setup>
import { RouterLink } from 'vue-router';
import TodoListing from './TodoListing.vue';
import { reactive, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  todos: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Unauthorized access. Redirecting to login...');
      router.push('/login'); // Redirect to login if no token
      return;
    }

    const response = await axios.get('/api/todos', {
      headers: { Authorization: `Bearer ${token}` }, // Send token
    });

    state.todos = response.data;
    console.log(state.todos);
  } catch (error) {
    console.error('Error fetching Todos', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Todos
      </h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Shoe todo listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TodoListing
          v-for="todo in state.todos.slice(0, limit || state.todos.length)"
          :key="todo.id"
          :todo="todo"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/todos"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Todos</RouterLink
    >
  </section>
</template>
