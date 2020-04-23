import { RouteConfig } from "vue-router";

export const routes: Array<RouteConfig> = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/signin",
		name: "signin",
		component: () => import("./signin.vue")
	},
	{
		path: "/signup",
		name: "signup",
		component: () => import("./signup.vue")
	},
	{
		path: "/home",
		name: "home",
		component: () => import("./home.vue")
	}
];
