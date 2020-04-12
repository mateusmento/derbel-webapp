<template>
	<section class="task-list">
		<div v-for="task of tasks" :key="task.id" class="task">
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
export default {
	props: ["tasks"]
};
</script>
