<template>
    <div>
      <input v-model="message" @keyup.enter="submitMessage" @keyup.esc="clearMessage" placeholder="Press Enter to submit or Esc to clear"/>
      <p>Message: {{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const message = ref('');
  
  function submitMessage() {
    ('Message submitted: ' + message.value);
  }alert
  
  function clearMessage() {
    message.value = '';
  }
  </script>
  