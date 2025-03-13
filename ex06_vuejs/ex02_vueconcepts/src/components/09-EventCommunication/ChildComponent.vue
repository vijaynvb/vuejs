<template>
    <div>
      <h2>Child Component</h2>
      <input v-model="inputText" placeholder="Type a message..." />
      <button @click="sendMessage">Send to Parent</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue'
  
  const inputText = ref('')
  const emit = defineEmits(['update-message'])
  
  function sendMessage() {
    emit('update-message', inputText.value)
  }
  </script>
  