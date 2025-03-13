<script setup>
import { ref } from 'vue'

const showElement = ref(true)
const showText = ref(true)
const status = ref('loading') // Change to 'success' or 'error' to test
</script>

<template>
    <div>
      <!-- Toggle Visibility -->
      <button @click="showElement = !showElement">
        Toggle Element (v-if)
      </button>
  
      <!-- v-if / v-else -->
      <p v-if="showElement">This is visible when 'showElement' is true</p>
      <p v-else>This is visible when 'showElement' is false</p>
  
      <!-- v-if / v-else-if / v-else -->
      <h3 v-if="status === 'success'">Success!</h3>
      <h3 v-else-if="status === 'error'">Error occurred!</h3>
      <h3 v-else>⏳ Loading...</h3>
  
      <!-- v-show (Element is still in the DOM but hidden) -->
      <button @click="showText = !showText">Toggle Text (v-show)</button>
      <p v-show="showText">This text is toggled using v-show</p>
    </div>
  </template>
  

  