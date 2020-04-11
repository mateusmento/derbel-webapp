import { RouteConfig } from "vue-router";

export const routes: Array<RouteConfig> = [
	{
		path: "/signin",
		name: "signin",
		component: () => import("./signin.vue")
	},
	{
		path: "/signup",
		name: "signup",
		component: () => import("./signup.vue")
	}
];
