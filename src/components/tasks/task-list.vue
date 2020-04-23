<template>
	<section class="task-list">
		<h3>{{ title }}</h3>
		<div
			v-for="task of tasks"
			:key="task.id"
			class="task"
			@click="select(task)"
		>
			<button>Completed</button>
			<span>{{ task.title }}</span>
		</div>
		<div class="new-task">
			<button>Add</button>
			<input type="text" />
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Tasks } from "../../model/tasks.collection";
import { Task } from "../../model/task.model";

@Component({})
export default class TaskListComponent extends Vue {
	@Prop() private tasks!: Tasks;
	@Prop() private title!: string;

	private select(task: Task) {
		this.$store.dispatch("select", task);
	}
}
</script>
