import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0, // State
  }),

  getters: {
    doubleCount: (state) => state.count * 2, // Getter
  },

  actions: {
    increment() {
      this.count++ // Action to update state
    },
    decrement() {
      this.count--
    }
  }
})
