<script setup>
import router from '@/router';
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const form = reactive({
  email: '',
  password: ''
});

const toast = useToast();

const handleLogin = async () => {
  try {
    const response = await axios.post('/api/auth/login', {
      email: form.email,
      password: form.password
    });

    // Store token in localStorage
    localStorage.setItem('token', response.data.token);

    console.log('token', response.data.token)

    toast.success('Login Successful');
    router.push('/'); // Redirect to todos page
  } catch (error) {
    console.error('Login failed', error);
    toast.error(error.response?.data?.message || 'Login Failed');
  }
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleLogin">
          <h2 class="text-3xl text-center font-semibold mb-6">Login</h2>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              required
            />
          </div>

          <!-- Forgot Password Link -->
          <div class="mb-4 text-right">
            <RouterLink to="/forgot-password" class="text-green-500 font-bold hover:underline">
              Forgot Password?
            </RouterLink>
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>

          <!-- Sign Up Link -->
          <div class="text-center mt-4">
            <p class="text-gray-700">
              Don't have an account?
              <RouterLink to="/signup" class="text-green-500 font-bold hover:underline">Sign Up</RouterLink>
            </p>
          </div>
          
        </form>
      </div>
    </div>
  </section>
</template>
