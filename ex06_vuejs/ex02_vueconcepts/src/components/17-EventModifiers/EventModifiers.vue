<script setup>
import {ref} from 'vue';

const count =ref(0);
// with out parameters
// const IncrementCounter =()=>{
//   count.value++;
// };
// with paramaeters
const IncrementCounter =(name, event)=>{
  console.log(name);
  count.value++;
};

const LinkClicked = ()=>{
  console.log("google link clicked")
}

// ------------------
const logEvent = (message) => {
  console.log(message);
};


</script>

<template>
    <div>
      <h1> Events Basics Use</h1>
      <!-- <button @click="IncrementCounter">Counter Click</button> -->
      <button @click="IncrementCounter('vijay', $event)">Counter Click</button>
      <p>Counter : {{ count }}</p>
    </div>

    <div>
      <h2>Event Modifiers Demo</h2>
      <!--Check in console how to stop the event bubbling using .stop modifier -->
      <!-- 🔹 .stop (Prevents event bubbling) -->
      <div @click="logEvent('Outer Div Clicked')">
        <button @click="logEvent('Button Clicked')">Click Me</button>
        <!-- <button @click.stop="logEvent('Button Clicked')">Click Me (.stop)</button> -->
      </div>
  
      <!-- 🔹 .prevent -->
      <!-- <a href="http://google.com" @click="LinkClicked">google</a> -->
      <a href="http://google.com" @click.prevent="LinkClicked">google</a>

      <!-- 🔹 .prevent (Prevents form submission) -->
      <!-- <form @submit="logEvent('Form Submitted')"> -->
      <form @submit.prevent="logEvent('Form Submitted')">
        <button type="submit">Submit Form (.prevent)</button>
      </form>
  
      <!-- 🔹 .once (Executes only once) -->
      <button @click.once="logEvent('Clicked Once')">Click Me (.once)</button>
  
      <!-- 🔹 .capture (reverses the event exectuion order) -->
      <!-- <div @click="logEvent('Outer Captured Click')"> -->
        <div style="border:1;border-style: solid;" @click.capture="logEvent('Outer Captured Click')">
        <button @click="logEvent('Inner Button Clicked')">Click Me (.capture)</button>
      </div>
  
      <!-- 🔹 .self (Only triggers if div is clicked directly) -->
      <!-- <div @click="logEvent('Outer Div Clicked Directly')" style="padding: 20px; background-color: lightgray;"> -->
        <div @click.self="logEvent('Outer Div Clicked Directly')" style="padding: 20px; background-color: lightgray;">
        Click inside this box (.self)
        <button @click="logEvent('Button Inside Clicked')">Click Me</button>
      </div>
  
      <!-- 🔹 .passive (Improves scroll performance) -->
      <div @wheel.passive="logEvent('Wheel Scrolled')">
        Scroll here (.passive)
      </div>
  
    </div>
  </template>
  

  