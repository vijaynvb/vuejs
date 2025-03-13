<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const count = ref(0);

onBeforeMount(() => {
  console.log("Component is about to be mounted!");
});

onMounted(() => {
  console.log("Component is mounted to the DOM!");
});

onBeforeUpdate(() => {
  console.log("Component is about to update!");
});

onUpdated(() => {
  console.log("Component has updated!");
});

onBeforeUnmount(() => {
  console.log("Component is about to be destroyed!");
});

onUnmounted(() => {
  console.log("Component has been destroyed!");
});
</script>

<template>
  <div class="lifecycle-container">
    <h2>Vue Lifecycle Hooks Example</h2>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase Count</button>
  </div>
</template>

<style scoped>
.lifecycle-container {
  border: 2px solid red; 
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
}
</style>
