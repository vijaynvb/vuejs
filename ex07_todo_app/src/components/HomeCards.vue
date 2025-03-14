<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">My Todo</h2>
          <p class="mt-2 mb-4">
            Represents personal training tasks assigned to the user
          </p>
          <RouterLink
            to="/todos"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Todos
          </RouterLink>
        </Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">Team Todo</h2>
          <p class="mt-2 mb-4">
            Represents collaborative training tasks meant for a team.
          </p>
          <RouterLink
            to="/teams-todos"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Teams Todo
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
