<script setup>
// Component communication by creating attributes for componets using props and events
defineProps(['name']) // parent to child communication
defineEmits(['update-name']) // child to parent communication
</script>
  
  <template>
    <div class="child-container">
    <input :value="name" @input="$emit('update-name', $event.target.value)">
    <label> child component </label>
  </div>
  </template>
  
  <style scoped>
  .child-container {
    border: 2px solid red; 
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
  }
  </style>
 
