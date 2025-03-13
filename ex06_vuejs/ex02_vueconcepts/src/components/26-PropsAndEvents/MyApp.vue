
  <script setup>
  import { onMounted, ref } from 'vue'
  import UserInput from './UserInput.vue'

  const userName = ref(null);
  // set value in parent 
  onMounted(() => {userName.value = "Vijay";})
  </script>

<template>
  
    <label> initial value of user name: {{ userName }}</label>
    <!-- pass value to child -->
    <UserInput :name="userName" @update-name="userName = $event" />
    <!-- recive updated value from child -->
    <p>Updated Name: {{ userName }}</p>
    <label> Parent component</label>
  </template>
  
  
  