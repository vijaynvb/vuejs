<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { RouterLink } from 'vue-router';
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const state = reactive({
  todos: [],
  isLoading: true,
});

onMounted(async () => {  
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Unauthorized access. Redirecting to login...');
      router.push('/login'); // Redirect to login if no token
      return;
    }

    const response = await axios.get('/api/todos', {
      headers: { Authorization: `Bearer ${token}` }, // Send token
    });

    state.todos = response.data;
    console.log(state.todos);
  } catch (error) {
    console.error('Error fetching Todos', error);
  } finally {
    state.isLoading = false;
  }
});

const deleteTodo = async (id) => {
  try {
    const confirmDelete = window.confirm('Are you sure you want to delete this Todo?');
    if (!confirmDelete) return;

    const token = localStorage.getItem('token'); // Get token from storage
    if (!token) {
      toast.error('Unauthorized: Please log in');
      router.push('/login');
      return;
    }

    await axios.delete(`/api/todos/${id}`, {
      headers: { Authorization: `Bearer ${token}` }, // Send token in headers
    });

    // Remove deleted todo from the list
    state.todos = state.todos.filter(todo => todo.id !== id);

    toast.success('Todo Deleted Successfully');
  } catch (error) {
    console.error('Error deleting Todo', error);
    toast.error('Todo Not Deleted');
  }
};
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
            Browse Todos
          </h2>
          <!-- Show loading spinner while loading is true -->
          <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
            <PulseLoader />
          </div>
      
        <DataTable v-else :value="state.todos" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <Column field="id" header="ID" style="width: 5%"></Column>
            <Column field="title" header="Title" style="width: 15%"></Column>
            <Column field="description" header="Description" style="width: 35%"></Column>
            <Column field="due" header="Due Date" style="width: 15%"></Column>
            <Column field="status" header="Status" style="width: 15%"></Column>
            <Column header="Edit" style="width: 7%">
                <template #body="{ data }">
                    <RouterLink
                      :to="'/todos/edit/' + data.id"
                      class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                      >Edit</RouterLink>
                </template>
            </Column>
            <Column header="Delete">
                <template #body="{ data }" style="width: 8%">
                    <button
                       @click="deleteTodo(data.id)"
                      class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                      Delete
                    </button>
                </template>
            </Column>
        </DataTable>
        </div>
    </section>
</template>