<script setup>
import { ref } from 'vue'
import FormComponent from './FormComponent.vue'

const submittedData = ref(null)

function handleSubmit(formData) {
  submittedData.value = formData
}
</script>

<template>
    <div>
      <h1>Vue Forms with v-model</h1>
      <FormComponent @submit-form="handleSubmit" />
      <div v-if="submittedData">
        <h2>Submitted Data:</h2>
        <p><strong>Name:</strong> {{ submittedData.name }}</p>
        <p><strong>Email:</strong> {{ submittedData.email }}</p>
        <p><strong>Message:</strong> {{ submittedData.message }}</p>
      </div>
    </div>
  </template>
  

  