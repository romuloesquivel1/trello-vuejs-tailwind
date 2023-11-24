<template>

  <div class="flex flex-col justify-center items-center bg-gray-200 w-full h-screen">
    <h1 class="mb-6 text-3xl font-bold text-gray-700">{{ user ? 'Welcome' : 'Login' }}</h1>
    <div v-if="isLoggedIn === false" class="mb-6 text-red-500">Invalid credentials</div>

    <div v-if="user" class="mb-6 text-green-500">
      <div v-if="isLoggedIn === true">Login successful, redirecting in {{ secondToRedirect }}...</div>

      <div class="mt-2 flex flex-row justify-center items-center">
        <a href="#" @click.prevent="goToPage('home')">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Home
          </button>
        </a>
        <a href="#" class="mx-5" @click.prevent="goToPage('board')">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Go to Board
          </button>
        </a>
        <a href="#" @click.prevent="goToPage('profile')">
          <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Profile
          </button>
        </a>
      </div>
    </div>

    <div v-if="user">You are logged in as {{ user.name }}</div>
    <form v-else-if="!user" @submit.prevent="login" class="bg-white shadow-md rounded px-8 py-6 w-1/3">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="email" type="text" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-model="password" type="password" required>
      </div>
      <div class="">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Login
        </button>

        <router-link :to="{ name: 'home' }" class="block mt-4 text-blue-500 hover:text-blue-800">
            Back to Home
        </router-link>
      </div>
    </form>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { save as saveToLocalStorage, USER_KEY } from '@/utils/localStorageHelper'

const router = useRouter()
const email = ref('')
const password = ref('')
const userStore = useUserStore()
const isLoggedIn = ref(null)
const secondToRedirect = ref(15)
const user = computed(() => userStore.user);
const id = ref(null);

const goToPage = (page) => {
  if (id.value)
    clearInterval(id.value);

  router.push({ name: page });
}

function login() {
  isLoggedIn.value = null;
  isLoggedIn.value = userStore.login(email.value, password.value);
  if (isLoggedIn.value) {
    saveToLocalStorage(USER_KEY, user.value);

    id.value = setInterval(() => {
      secondToRedirect.value -= 1;
      if (secondToRedirect.value === 0) {
        router.push({ name: 'home' })
      }
    }, 1000);
  }
}

</script>
