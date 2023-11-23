import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from '../views/NotFoundView.vue';

const router = new createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
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

export default router;
