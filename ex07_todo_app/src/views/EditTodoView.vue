<script setup>
import router from '@/router';
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();

const id = route.params.id;

const form = reactive({
  title: '',
  description: '',
  dueDate: '',
  status: ''
});

const state = reactive({
  todo: {},
  isLoading: true,
});

const toast = useToast();

const handleSubmit = async () => {
  const token = localStorage.getItem('token'); // Get stored token
  if (!token) {
    toast.error('Unauthorized! Please log in.');
    router.push('/login');
    return;
  }

  const updatedTodo = {
    title: form.title,
    description: form.description,
    due: form.dueDate,
    status: form.status,
  };

  try {
    const response = await axios.put(`/api/todos/${id}`, updatedTodo, {
      headers: { Authorization: `Bearer ${token}` }, // Secure request with token
    });

    toast.success('Todo Updated Successfully');
    router.push(`/todos/${response.data.id}`);
  } catch (error) {
    console.error('Error updating todo', error);
    toast.error(error.response?.data?.message || 'Todo Was Not Updated');
  }
};

onMounted(async () => {
  const token = localStorage.getItem('token'); // Get token
  if (!token) {
    toast.error('Unauthorized! Please log in.');
    router.push('/login');
    return;
  }

  try {
    const response = await axios.get(`/api/todos/${id}`, {
      headers: { Authorization: `Bearer ${token}` }, // Secure request
    });

    state.todo = response.data;
    
    // Populate form inputs with existing data
    form.title = state.todo.title;
    form.description = state.todo.description;
    form.dueDate = state.todo.due;
    form.status = state.todo.status;
  } catch (error) {
    console.error('Error fetching Todo', error);
    toast.error(error.response?.data?.message || 'Failed to fetch todo');
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Todo</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"
              >Title</label
            >
            <input
              type="text"
              v-model="form.title"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Enter Task Title"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              v-model="form.description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Describe the Task"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="due-date" class="block text-gray-700 font-bold mb-2">Due Date</label>
            <input
              type="date"
              id="due-date"
              v-model="form.dueDate"
              name="due-date"
              class="border rounded w-full py-2 px-3"
            />
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >Status</label
            >
            <select
              v-model="form.status"
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
