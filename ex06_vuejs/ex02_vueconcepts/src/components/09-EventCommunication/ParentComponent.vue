<template>
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {{ message }}</p>
      <ChildComponent @update-message="updateMessage" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ChildComponent from './ChildComponent.vue'
  
  const message = ref('')
  
  function updateMessage(newMessage) {
    message.value = newMessage
  }
  </script>
  