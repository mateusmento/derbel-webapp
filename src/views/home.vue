<template>
	<div class="home">
		<header>
			<navbar />
			<user-menu />
		</header>

		<main>
			<task-list id="todo" title="Todo" :tasks="tasks.todo" />
			<task-list id="doing" title="Doing" :tasks="tasks.doing" />
			<task-list id="done" title="Done" :tasks="tasks.done" />
		</main>

		<task-details />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Tasks } from "@/model/tasks.collection";
import TaskDetails from "../components/tasks/task-details.vue";
import TaskList from "../components/tasks/task-list.vue";
import UserMenu from "../components/shared/user-menu.vue";
import Navbar from "../components/shared/navbar.vue";

@Component({
	components: { TaskDetails, TaskList, UserMenu, Navbar }
})
export default class HomeComponent extends Vue {
	private get tasks(): Tasks {
		return this.$store.getters.tasks;
	}
}
</script>

<style lang="scss" scoped>
.home {
	height: 690px;
	display: grid;
	grid-template-columns: 4fr 0.5fr 11fr;
	grid-template-rows: 1fr 3fr 8fr;
	grid-template-areas:
		"aside . header"
		"aside . ."
		"aside . main";

	header {
		grid-area: header;
		border: 1px solid white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 30px;
		.navbar {
			width: 400px;
		}
	}

	.task-details {
		grid-area: aside;
		border: 1px solid white;
	}

	main {
		grid-area: main;
		border: 1px solid white;
	}
}
</style>
