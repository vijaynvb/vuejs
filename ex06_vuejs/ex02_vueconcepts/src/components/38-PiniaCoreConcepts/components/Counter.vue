<script setup>
import { useCounterStore } from '../stores/counterStore'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h2>Pinia Core Concepts</h2>
    <p>Count: {{ counterStore.count }}</p> <!-- State -->
    <p>Double Count: {{ counterStore.doubleCount }}</p> <!-- Getter -->
    <button @click="counterStore.increment">Increment</button> <!-- Action -->
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>
