<!-- App.vue -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Navigate to a different route
const goToAbout = () => {
  router.push({ name: 'About' }) // Navigates to About page
}

// Replace current location (No Back button option)
const replaceWithContact = () => {
  router.replace({ name: 'Contact' }) // Replaces current route with Contact
}

// Traverse History (Go Back & Forward)
const goBack = () => {
  router.go(-1) // Goes one step back
}

const goForward = () => {
  router.go(1) // Goes one step forward
}
</script>

<template>
  <div>
    <h2>Vue Router Programmatic Navigation</h2>
    
    <!-- Navigation Buttons -->
    <button @click="goToAbout">Go to About Page</button>
    <button @click="replaceWithContact">Replace with Contact Page</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>
    
    <!-- Router View -->
    <router-view />
  </div>
</template>
