<template>
	<li class="group relative rounded-md border-b border-gray-300 bg-white p-3 shadow hover:bg-gray-50">
		<div>
			<div class="">
				<h5 class="font-semibold text-gray-800">{{ task.title }}</h5>
				<p class="mt-2 max-w-max rounded-sm bg-blue-100 px-2 py-1 text-xs font-semibold text-gray-600">
					{{ task.date ? $dayjs(task.date).format("MMM DD, ddd") : "No Date" }}
				</p>
			</div>
			<div class="absolute top-1 right-1 bottom-1 hidden justify-between group-hover:grid">
				<button v-if="isLoggedIn" type="button" @click="openEditModal" class="rounded-md bg-gray-50 px-2 hover:bg-gray-100">
					<PencilIcon class="h-4 w-4 text-center text-gray-500" />
				</button>
				<button v-if="isLoggedIn" @click="openConfirmModal" class="bg-gray-60 rounded-md px-2 hover:bg-gray-100">
					<TrashIcon class="h-4 w-4 text-center text-red-500" />
				</button>
			</div>
			<CardForm v-if="isOpen" :is-open="isOpen" :task="task" :is-edit="true" @close-modal="closeEditModal" />
		</div>
	</li>
</template>

<script setup>
import { ref, computed } from "vue";
import CardForm from "./CardForm.vue";
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/solid";
import { EventBus } from '../utils/EventBus.js';
import { useUserStore } from '../stores/user';

const props = defineProps({ task: Object, listId: String });

// Modal Open/Close Methods
const isOpen = ref(false);

function openEditModal() {
	isOpen.value = true;
}

function closeEditModal() {
	isOpen.value = false;
}

// check if user is logged in
const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.user !== null);

// Confirm Modal
function openConfirmModal() {
	EventBus.emit('open-modal', { type: 'task', itemId: props.task.id });
}
</script>

<style scoped>
.drag > div {
	transform: rotate(5deg);
}
.ghost {
	background: lightgray;
	border-radius: 6px;
}
.ghost > div {
	visibility: hidden;
}
</style>
