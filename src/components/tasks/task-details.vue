<template>
	<aside v-if="task" class="task-details">
		<h1>Task Title</h1>
		<ul class="steps">
			<li v-for="step of task.steps" :key="step.id" class="step">
				<span>{{ step.title }}</span>
				<button>Completed</button>
			</li>
			<li class="new-step">
				<button>Add</button>
				<input type="text" />
			</li>
		</ul>
		<label>
			Description
			<textarea cols="30" rows="10"></textarea>
		</label>
	</aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Task } from "@/model/task.model";

@Component({})
export default class TaskDetailsComponent extends Vue {
	public get task(): Task | null {
		return this.$store.state.selectedTask;
	}
}
</script>
