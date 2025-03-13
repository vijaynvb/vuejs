<script setup lang="ts">
import { ref } from 'vue';

const inputType = ref("text");

setTimeout(()=>{ inputType.value = "password"}, 10000);

const textColor = ref("green");

setTimeout(()=>{ textColor.value = "aqua"}, 10000);

const link = "http://google.com";

const isActive = ref(true)
const isWarning = ref(false)

function toggleWarning() {
  isWarning.value = !isWarning.value
}

</script>

<template>
    <input v-bind:type="inputType" />
    <br/>
    <input :type="inputType" />

    <p :style="{color: textColor}">i am paragrah</p>

    <a :href="link" >google</a>

    <p :class="{ active: isActive, warning: isWarning }">
        This paragraph has dynamic classes
      </p>

 <button v-on:click="toggleWarning">Toggle Warning</button>
 <button @click="toggleWarning">Toggle Warning</button>

</template>

<style lang="css" scoped>
.active {
  font-weight: bold;
  color: green;
}
.warning {
  color: red;
}
</style>