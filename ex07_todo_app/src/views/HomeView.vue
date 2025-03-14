<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import TodoListings from '@/components/TodoListings.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <TodoListings :limit="3" :showButton="true" />
</template>
