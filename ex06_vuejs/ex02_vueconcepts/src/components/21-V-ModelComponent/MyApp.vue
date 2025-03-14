
<script setup>
import { ref } from 'vue';
import ModalComponent from './ModelComponent.vue';

const showModal = ref(false);
</script>
<template>
  <div>
    <h1>Vue 3 Modal Example with defineModel()</h1>

    <!-- Button to open modal -->
    <button @click="showModal = true">Open Modal</button>

    <!-- Custom Modal Component using v-model -->
    <ModalComponent v-model="showModal">
      <h2>Vue 3 DefineModel Example</h2>
      <p>This is a modal component using `defineModel()`.</p>
    </ModalComponent>
  </div>
</template>


