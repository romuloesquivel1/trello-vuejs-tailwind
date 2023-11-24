<template>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal">
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="min-h-screen px-4 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<DialogOverlay class="fixed inset-0 bg-black bg-opacity-50" />
					</TransitionChild>

					<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>

					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<div
							class="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
								Are you sure you want to delete this ?
							</DialogTitle>

							<div class="mt-4">
                <div>
                  <button
                    type="button"
                    class="float-left inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="float-right inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    @click="confirmAction"
                  >
                    Confirm
                  </button>
                </div>
              </div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle } from "@headlessui/vue";
import { EventBus } from '../utils/EventBus.js';
import { useBoardStore } from "@/stores/board";

const currentConfirmItemId = ref(null);
const currentConfirmItemType = ref(null);

// Modal Open/Close
const isOpen = ref(false);

const boardStore = useBoardStore();

function closeModal() {
	isOpen.value = false;
	currentConfirmItemId.value = null;
	currentConfirmItemType.value = null;
}

function openModal() {
	isOpen.value = true;
}

// Confirm Action
function confirmAction() {
	if (currentConfirmItemType.value === 'task') {
		boardStore.removeItem({ itemId: currentConfirmItemId.value });
	} else if (currentConfirmItemType.value === 'list') {
		boardStore.removeList({ listId: currentConfirmItemId.value });
	}

  closeModal();
}

// listen for open modal event
onMounted(() => {
  EventBus.on('open-modal', ({ type, itemId }) => {
		currentConfirmItemId.value = itemId;
		currentConfirmItemType.value = type;
    openModal();
  });
});

onUnmounted(() => {
  EventBus.off('open-modal');
});
</script>
