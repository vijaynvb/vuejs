
<script setup>
import { ref } from 'vue'

// Array of fruits
const fruits = ref(['Apple', 'Banana', 'Orange'])

// Array of objects
const users = ref([
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
])

// Object with key-value pairs
const car = ref({
  brand: 'Tesla',
  model: 'Model S',
  year: 2022
})

// Dynamic list
const items = ref([])
const newItem = ref('')

function addItem() {
  if (newItem.value.trim() !== '') {
    items.value.push(newItem.value)
    newItem.value = '' // Clear input
  }
}

function removeItem(index) {
  items.value.splice(index, 1)
}
</script>

<template>
    <div>
      <!-- Looping through an array -->
      <!-- <h2>Fruits List</h2>
      <ul>
        <li v-for="(item, index) in fruits" :key="index">
            {{ item }}
        </li>
      </ul> -->
  
      <!-- Looping through an array of objects -->
      <!-- <h2>Users List</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul> -->
  
      <!-- Looping through an object -->
      <!-- <h2>Car Details</h2>
      <ul>
        <li v-for="(value, key) in car" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul> -->
  
      <!-- Dynamic list with user input -->
      <h2>Add Items to the List</h2>
      <input v-model="newItem" placeholder="Enter an item" />
      <button @click="addItem">Add</button>
      <ul>
        <li v-for="(item, i) in items" :key="i">
          {{ item }} <button @click="removeItem(i)">❌</button>
        </li>
      </ul>
    </div>
  </template>
  
 