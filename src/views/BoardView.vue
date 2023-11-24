<template>
	<div class="flex h-screen flex-col bg-blue-600">
		<!-- Board Screen -->
		<main class="flex-1 overflow-hidden">
			<div class="flex h-full flex-col">
				<!-- Board Title -->
				<div class="flex shrink-0 items-center justify-between p-4">
					<h1 class="text-2xl font-bold text-white">Wall-E</h1>
					<span v-if="!isLoggedIn" class="text-sm font-semibold text-white">You need to login to enable perform actions</span>
					<div>
						<button v-if="isLoggedIn"
							class="mr-3 inline-flex items-center rounded-md bg-orange-400 px-3 py-2 text-sm font-medium text-white hover:bg-orange-500"
							@click="boardStore.reset">
							<ArrowPathIcon class="h-5 w-5 text-white" />
							<span class="ml-2"> Reset</span>
						</button>
						<button
							class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20"
						>
							<CogIcon class="h-5 w-5 text-gray-300" />
							<span class="ml-2"> Settings</span>
						</button>
					</div>
				</div>

				<div class="flex-1 overflow-x-auto">
					<div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
						<!-- Board Lists -->
						<TheList
							v-for="list in lists"
							:key="list.id" :list="list"
							@onChange="onChange" :isLoggedIn="isLoggedIn"
						/>

						<!-- Add List -->
						<div class="w-72">
							<AddList :isLoggedIn="isLoggedIn" />
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
// Components
import TheList from "../components/TheList.vue";
import AddList from "../components/AddList.vue";
import { watch, computed } from "vue";
import { save as saveToLocalStorage, BOARD_KEY } from "@/utils/localStorageHelper";
import { useUserStore } from '../stores/user';

// Icons
import { CogIcon, ArrowPathIcon, } from "@heroicons/vue/24/solid";

// Store
import { useBoardStore } from "@/stores/board";

// Data
const boardStore = useBoardStore();
const lists = boardStore.lists;

// check if user is logged in
const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.user !== null);

// watch lists change
watch(lists, function (newLists) {
	// console.log("BoardView: lists changed", newLists);
	saveToLocalStorage(BOARD_KEY, newLists);
});

function onChange(list) {
	boardStore.updateList(list);
}
</script>

<style scoped>
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}
::-webkit-scrollbar-thumb {
	background: #9ca3af;
	border-radius: 6px;
}
</style>
