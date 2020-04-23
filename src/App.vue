<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
* {
	font-family: "Montserrat Medium";
}

body {
	margin: 0;
	background: linear-gradient(
		250deg,
		rgba(0, 165, 255, 1) 0%,
		rgba(0, 194, 251, 1) 23%,
		rgba(0, 212, 251, 1) 57%,
		rgba(35, 226, 255, 1) 100%
	);
	/* background-position: center; */
	/* background-size: cover; */
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

	// &.router-link-exact-active {
	// 	color: #42b983;
	// }
}
</style>
