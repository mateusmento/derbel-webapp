import { Stage } from "@/model/stage.enum";
import { Task } from "@/model/task.model";
import { Tasks } from "@/model/tasks.collection";
import { User } from "@/model/user.model";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const user = new User(1, "Mateus Sarmento");

export default new Vuex.Store({
	state: {
		user,
		selectedTask: undefined,
		tasks: [
			new Task("Task 1", user, Stage.DONE),
			new Task("Task 2", user, Stage.DONE),
			new Task("Task 3", user, Stage.DOING),
			new Task("Task 4", user)
		]
	},
	getters: {
		tasks: state => new Tasks(...state.tasks)
	},
	mutations: {
		selectedTask: (state, task) => (state.selectedTask = task)
	},
	actions: {
		select({commit}, task) {
			commit("selectedTask", task);
		}
	},
	modules: {}
});
