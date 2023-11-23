<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-60px)] bg-gray-100">
    <div class="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl">
      <div class="w-1/3 bg-cover" style="background-image: url('https://placekitten.com/640/360')"></div>
      <div class="w-2/3 p-4">
        <h1 class="text-gray-900 font-bold text-2xl">John Doe</h1>
        <p class="mt-2 text-gray-600 text-sm">Software Developer</p>
        <div class="flex items-center mt-4 text-gray-700">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            Vue.js, Tailwind CSS
          </div>
        </div>
        <div class="mt-5">
          <p class="text-gray-500">Location: New York, USA</p>
          <p class="text-gray-500">Website: www.johndoe.com</p>
          <p class="text-gray-500">Joined: January 2020</p>
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
  </div>
</template>
