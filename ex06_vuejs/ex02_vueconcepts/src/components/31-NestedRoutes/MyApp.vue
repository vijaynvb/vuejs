<script setup>
  const name= "App";
</script>


<template>
    <h1>Nested Views</h1>
    <p>
      <router-link to="/users/eduardo">/users/eduardo</router-link>
      |
      <router-link to="/users/eduardo/profile"
        >/users/eduardo/profile</router-link
      >
      |
      <router-link to="/users/eduardo/posts">/users/eduardo/posts</router-link>
    </p>

    <!-- user component -->
    <router-view></router-view>
  </template>
  

  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  .router-link-active {
    color: orange;
  }
  
  .router-link-exact-active {
    color: crimson;
  }
  </style>
  
  <style scoped>
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li:not(:last-of-type) {
    margin-right: 1rem;
  }
  </style>