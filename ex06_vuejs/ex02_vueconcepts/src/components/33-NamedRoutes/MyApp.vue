<template>
    <h1>Named Routes</h1>
    <p>Current route name: {{ $route.name }}</p>
    <p>Current route path: {{ $route.path }}</p>
      
        <router-link :to="{ name: 'home' }">
          Home
        </router-link>
      |
      
        <router-link :to="{ name: 'about' }">
          About
        </router-link>
      |
      
        <router-link :to="{ name: 'profile', params: { username: 'Vijay' } }">
          User profile
        </router-link>
      
    <router-view />
  </template>