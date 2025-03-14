<script setup>
const isOpen = defineModel();
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <slot></slot>
      <button @click="isOpen = false">Close</button>
    </div>
  </div>
</template>



<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: red;
}
</style>
