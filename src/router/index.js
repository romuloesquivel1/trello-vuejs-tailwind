import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from '../views/NotFoundView.vue';
import { useUserStore } from "../stores/user";

const router = new createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	activeClass: "bg-blue-500 text-white",
	exactActiveClass: "bg-blue-500 text-white",
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/board",
			name: "board",
			component: () => import("../views/BoardView.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/LoginView.vue"),
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../views/ProfileView.vue"),
		},

		{
			path: '/:pathMatch(.*)*',
			name: 'not_found', component: NotFoundView
		},
	],
});

// guard navigation to /profile
router.beforeEach((to, from, next) => {
	const userStore = useUserStore();
	const isAuthenticated = userStore.user !== null;
	if (to.name !== "login" && !isAuthenticated && to.name === 'profile')
		next({ name: "login" });
	else next();
});

export default router;
