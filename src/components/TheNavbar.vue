
<template>
	<header class="flex shrink-0 justify-between bg-white px-4 py-3">
		<RouterLink class="text-2xl font-black tracking-tight" to="/">Trello Vue</RouterLink>
		<nav>
			<RouterLink class="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100" to="/">Home</RouterLink>
			<RouterLink class="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100" to="/board">Board</RouterLink>
			<div class="relative btn-user inline-block text-left ml-3" v-if="user">
				<div>
					<button @click="open = !open" aria-haspopup="true" aria-expanded="true">
						<img
							src="@/assets/img/user.png"
							alt="User Avatar"
							class="inline h-9 w-9 rounded-full"
							width="36"
							height="36"
						/>
					</button>
				</div>

				<div v-if="open" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
						<router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Profile</router-link>
						<a href="#" @click class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</a>
					</div>
				</div>
			</div>
			<RouterLink v-else class="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100" to="/login">Login</RouterLink>
		</nav>
	</header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
import { computed, ref } from "vue";

const userStore = useUserStore();
const user = computed(() => userStore.user);
const open = ref(false);

// body document onclick set open to false
document.body.addEventListener("click", (evt) => {
	if (evt.target.closest(".btn-user")) return;
	open.value = false;
});
</script>
