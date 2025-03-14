<script setup>
import Card from './Card.vue'

</script>

<template>
    <div>
      <h1>Vue Slots Example</h1>
  
      <!-- Using the Card Component -->
      <Card>
        <template #header> <!-- substitude in header slot-->
          <h2>Custom Header</h2>
        </template>
  
        <p>This is the main content inside the slot.</p>
  
        <template #footer="{ info }">
          <p>{{ info }}</p>
        </template>
      </Card>
    </div>
  </template>
  