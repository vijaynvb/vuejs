<script setup lang="ts">
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// is the author written any books?
// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

function deletebooks(){
  author.books = [];
}
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <button @click="deletebooks">delete books</button>
</template>