<script setup>
  import { ref, defineEmits } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  // event register
  const emit = defineEmits(['submit-form'])
  
  // event action
  function submitForm() {
    emit('submit-form', { ...form.value })
  }
  </script>

  

<template>

  <!-- 
    {{}} -> js -> html
    v-bind -> js -> html
    v-on -> hmtl -> js
    v-model - two way data binding 
     -->
  <!-- event tigger on -->
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input id="name" v-model="form.name" type="text" required />
  
      <label for="email">Email:</label>
      <input id="email" v-model="form.email" type="email" required />
  
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message"></textarea>
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 10px;
  }
  </style>
  
<!-- function(){

}

  <form >
    <input type="test"></input>
    <input type="password"></input>
    <input type="select"></input>
    <input type="submit"></input>
    <button click="funtion">
  </form> -->