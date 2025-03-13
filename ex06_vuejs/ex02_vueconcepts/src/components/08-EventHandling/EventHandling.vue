
<script setup>
  import { ref } from 'vue'
  
  // Click event
  const count = ref(0)
  function incrementCount() {
    count.value++
  }
  
  // Input event
  const text = ref('')
  function updateText(event) {
    text.value = event.target.value
  }
  
  // Keyboard event
  const submitted = ref('')
  function submitText(event) {
    submitted.value = event.target.value
  }
  
  // Mouse event
  const hoverMessage = ref('')
  function showHoverMessage() {
    hoverMessage.value = 'Mouse Hovered!'
  }
  </script>
<template>
    <div>
      <h2>Button Click Event</h2>
      <button v-on:click="incrementCount" >Increment</button>
      <button @click="incrementCount" >Increment</button>
      <p>{{ count }}</p>




      <!-- <button v-on:click="incrementCount">Click Me</button>
      <button @click="incrementCount">Click Me</button>
      <p>Button Clicked: {{ count }} times</p> -->
  
       <h2>Input Event</h2>
      <input type="text" @input="updateText" placeholder="Type something..." />
      <p>You typed: {{ text }}</p>
  
      
      <h2>Keyboard Event</h2>
      <input type="text" @keyup.enter="submitText" placeholder="Press Enter" />
      <p>Submitted Text: {{ submitted }}</p>
      
      
      <h2>Mouse Event</h2>
      <button @mouseover="showHoverMessage">Hover Over Me</button>
      <p>{{ hoverMessage }}</p> 
    </div>
  </template>
  
  
  