<script setup>
import router from '@/router';
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  location: '',
});

const toast = useToast();

const handleSignup = async () => {
  if (form.password !== form.confirmPassword) {
    toast.error('Passwords do not match');
    return;
  }

  try {
    const response = await axios.post('/api/auth/signup', {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        location: form.location,
    });
    toast.success('User Sign Up Successful');
    router.push('/login'); // Redirect to todos page
  } catch (error) {
    console.error('Sign Up failed', error);
    toast.error(error.response?.data?.message || 'Sign Up failed');
  }
};
</script>

<template>
    <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSignup">
          <h2 class="text-3xl text-center font-semibold mb-6">Sign Up</h2>

          <div class="mb-4">
            <label for="firstName" class="block text-gray-700 font-bold mb-2">First Name</label>
            <input
              type="firstName"
              id="firstName"
              v-model="form.firstName"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter your FirstName"
              required
            />
          </div>

          <div class="mb-4">
            <label for="lastName" class="block text-gray-700 font-bold mb-2">Last Name</label>
            <input
              type="lastName"
              id="lastName"
              v-model="form.lastName"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter your LastName"
              required
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter your Email"
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
              placeholder="Create your password"
              required
            />
          </div>

          <div class="mb-4">
            <label for="confirmPassword" class="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="form.confirmPassword"
              class="border rounded w-full py-2 px-3"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div class="mb-4">
            <label for="location" class="block text-gray-700 font-bold mb-2">Location</label>
            <input
              type="location"
              id="location"
              v-model="form.location"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter your Location"
              required
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>

          <!-- Sign Up Link -->
          <div class="text-center mt-4">
            <p class="text-gray-700">
              Already have an Account?
              <RouterLink to="/login" class="text-green-500 font-bold hover:underline">Login</RouterLink>
            </p>
          </div>


        </form>
      </div>
    </div>
    </section>
   
</template>