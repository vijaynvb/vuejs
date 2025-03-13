<script setup>
  import { ref } from 'vue'
  
  // Dynamic class binding
  const isActive = ref(false)
  const isWarning = ref(false)
  
  function toggleActive() {
    isActive.value = !isActive.value
  }
  
  function toggleWarning() {
    isWarning.value = !isWarning.value
  }
  
  // Dynamic style binding
  const textColor = ref('black')
  const textSize = ref(16)
  
  function increaseSize() {
    textSize.value += 2
  }
  
  function changeColor() {
    textColor.value = textColor.value === 'black' ? 'blue' : 'black'
  }
  </script>

<template>
    <div>
      <h2>Class Binding Example</h2>
      <p :class="{'active': isActive, 'warning': isWarning}">
        This text has dynamic classes.
      </p>
      <button @click="toggleActive">Toggle Active</button>
      <button @click="toggleWarning">Toggle Warning</button>
  
      <h2>Style Binding Example</h2>
      <p :style="{ color: textColor, fontSize: textSize + 'px' }">
        This text has dynamic inline styles.
      </p>
      <button @click="increaseSize">Increase Font Size</button>
      <button @click="changeColor">Change Color</button>
    </div>
  </template>
  
  
  
  <style scoped>
  .active {
    color: green;
    font-weight: bold;
  }
  .warning {
    color: red;
    font-style: italic;
  }
  </style>
  