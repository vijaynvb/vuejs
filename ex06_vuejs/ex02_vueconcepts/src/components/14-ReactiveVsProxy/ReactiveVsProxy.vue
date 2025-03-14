<script setup lang="ts">
import { reactive } from 'vue'

const raw = {} // Original object
const proxy = reactive(raw) // Creating a reactive proxy

console.log(proxy === raw) // false (proxy is not the same as raw)
console.log(proxy)

raw.message = "heelo in raw object";

// Adding properties dynamically
proxy.message = "Hello, Vue!"

function updateMessage(): void {
  proxy.message = "Reactivity Works!"
}
</script>

<template>
  <div>
    <h2>Vue Reactivity - Proxy Example</h2>
    <p>Proxy === Raw: {{ proxy === raw }}</p>
    <p>Proxy = {{ proxy }}</p>
    <p>raw = {{ raw }}</p> 
    <p>Message: {{ proxy.message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>
