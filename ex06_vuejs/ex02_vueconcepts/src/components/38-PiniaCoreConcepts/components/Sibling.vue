<script setup>
import { useCounterStore } from '../stores/counterStore'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h2>Pinia Core Concepts</h2>
    <p>Count: {{ counterStore.count }}</p> <!-- State -->
  </div>
</template>