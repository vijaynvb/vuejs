<script setup>
  import { reactive, ref, watch } from "vue";
  
  // Deep Watcher Example
  const user = reactive({
    name: "Alice",
    age: 25
  });
  
  // Deep Watch: Tracks changes in nested properties
  watch(user, (newValue, oldValue) => {
    console.log("User updated:", newValue);
  }, { deep: true });
  
  const updateUser = () => {
    user.name = "Bob";
    user.age = 30;
  };
  
  // Eager Watcher Example
  const message = ref("Hello Vue!");
  
  // Immediate Watch: Runs on component mount
  watch(message, (newValue, oldValue) => {
    console.log("Eager Watcher triggered:", newValue);
  }, { immediate: true });
  
  </script>

<template>
    <div>
      <h2>Deep Watcher Example</h2>
      <p>Name: {{ user.name }}</p>
      <p>Age: {{ user.age }}</p>
      <button @click="updateUser">Update User</button>
  
      <h2>Eager Watcher Example</h2>
      <p>Message: {{ message }}</p>
    </div>
  </template>
  
  
  