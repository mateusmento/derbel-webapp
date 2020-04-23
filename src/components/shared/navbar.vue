<template>
	<nav class="navbar">
		<router-link to="/home">Tasks</router-link>
		<router-link to="/home">Calendar</router-link>
		<router-link to="/home">Notebooks</router-link>
		<router-link to="/home">Rewards</router-link>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: space-between;
	a {
		color: white;
		font-weight: bold;
	}
}
</style>
