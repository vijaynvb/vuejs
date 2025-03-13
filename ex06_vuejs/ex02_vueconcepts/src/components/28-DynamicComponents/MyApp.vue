<template>
  <div>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <button @click="currentComponent = 'Contact'">Contact</button>

    <component :is="componentMap[currentComponent]"></component>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const currentComponent = ref('Home')

const componentMap = {
  Home,
  About,
  Contact
}
</script>
