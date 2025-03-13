<template>
    <div>
      <h1>Vue Router Guards & Navigation Failures</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/login">Login</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <style>
  nav {
    margin-bottom: 20px;
  }
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: blue;
  }
  nav a.router-link-active {
    font-weight: bold;
    color: red;
  }
  </style>
  