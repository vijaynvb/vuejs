<script setup>
import { ref } from 'vue';
import LifecycleComponent from './LifecycleHooks.vue';

const showComponent = ref(true);

function toggleComponent() {
  showComponent.value = !showComponent.value;
}
</script>

<template>
  <div>
    <h1>Vue Lifecycle Hooks Demo</h1>
    <button @click="toggleComponent">
      {{ showComponent ? "Unmount Component" : "Mount Component" }}
    </button>

    <LifecycleComponent v-if="showComponent" />
  </div>
</template>
