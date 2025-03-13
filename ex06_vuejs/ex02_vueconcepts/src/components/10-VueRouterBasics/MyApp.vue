<template>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link :to="'/user/123'">User 123</router-link>
      </nav>

      <!-- 
      1. by sing url  in browser 
      2. hyperlink
       -->
      
      <router-view />
    </div>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }
  </style>
  