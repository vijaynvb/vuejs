<script setup>
import { ref } from 'vue'

const extraInfo = ref("This is additional info from the Card component.")
</script>

<template>
    <div class="card">
      <!-- Named Slot -->
      <div class="header">
        <slot name="header">Default Header</slot>
      </div>
  
      <!-- Default Slot -->
      <div class="content">
        <slot>Default Content</slot>
      </div>
  
      <!-- Named Slot with Actions of Bindings -->
      <div class="footer">
        <slot name="footer" :info="extraInfo">Default Footer</slot>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .card {
    border: 2px solid #333;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: red;
  }
  .header, .content, .footer {
    margin-bottom: 10px;
  }
  </style>
  