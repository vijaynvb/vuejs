<script setup lang="ts">
import { ref } from 'vue';

// events
const name = ref("vijay");

function updateName(){
    name.value = "jai";
}
</script>

<template>
    <h1> Declaring Reactive State</h1>
    <p>{{ name }}</p>
    <button v-on:click="updateName">click me </button>
</template>

<style>
</style>