<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
* {
	font-family: "Montserrat Medium";
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

small {
	font-family: "Montserrat";
}

a {
	color: #00bffc;
	text-decoration: none;

	&.router-link-exact-active {
		color: #42b983;
	}
}
</style>
