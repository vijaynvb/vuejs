<template>
    <aside>
      <h2>Sidebar</h2>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </aside>
  </template>
  
  <style scoped>
  aside {
    width: 200px;
    background: #eee;
    padding: 10px;
  }
  </style>
  