<template>
	<div class="home">
		<header>
			<navbar />
			<user-menu />
		</header>
		<task-details />
		<main>
			<task-list id="todo" :tasks="tasks.todo" />
			<task-list id="doing" :tasks="tasks.doing" />
			<task-list id="done" :tasks="tasks.done" />
		</main>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Tasks } from "@/model/tasks.collection";

@Component({})
export default class HomeComponent extends Vue {
	private tasks(): Tasks {
		return this.$store.getters.tasks;
	}
}
</script>
