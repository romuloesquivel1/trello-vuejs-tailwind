<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const user = computed(() => userStore.user);
const router = useRoute();

const isLoginRoute = computed(() => {
	return router.name === "login";
});

</script>

<template>
	<TheNavbar v-if="!isLoginRoute || user" />
	<RouterView />
</template>
