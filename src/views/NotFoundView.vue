<template>

  <div class="flex items-center flex-col justify-center min-h-[calc(100vh-60px)] bg-gray-100">
    <h1 class="text-4xl font-bold mb-4 text-red-500">404 Not Found</h1>
    <p class="text-lg mb-2">The page you were looking for could not be found.</p>
    <p class="text-lg">Go back to <router-link :to="{ name: 'home' }" class="text-blue-500">Home</router-link></p>
  </div>

</template>

<script setup>
</script>
