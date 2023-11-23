<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-60px)] bg-gray-100">
    <div v-if="user" class="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl">
      <div class="w-1/3 bg-cover" style="background-image: url('https://placekitten.com/640/360')"></div>
      <div class="w-2/3 p-4">
        <h1 class="text-gray-900 font-bold text-2xl">{{ user.name }}</h1>
        <p class="mt-2 text-gray-600 text-sm">{{ user.job }}</p>
        <div class="flex items-center mt-4 text-gray-700 text-md tracking-wide">
          {{ user.bio }}
        </div>
        <div class="mt-5">
          <p class="text-gray-500">Location: {{ user.location }}</p>
          <p class="text-gray-500">Website: {{ user.website }}</p>
          <p class="text-gray-500">Joined: {{ user.joined }}</p>
        </div>

        <div class="flex items-center mt-5">
          <button class="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded">Follow</button>
          <button class="mx-2 px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded">Message</button>
          <button class="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded">Email</button>
        </div>

        <div class="flex items-end justify-end mt-5">
          <button class="ml-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded">Edit Profile</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-gray-900 font-bold text-2xl">Please login to view your profile</h1>
      <router-link to="/login" class="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded">Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore();
const user = computed(() => userStore.user);
</script>
