<template>
	<section class="container">
		<header>
			<h1>Derbel</h1>
			<h2>Sign in with your account</h2>
		</header>

		<form @submit.prevent="goHome">
			<input class="field" type="text" placeholder="Username" />
			<input class="field" type="password" placeholder="Password" />
			<button type="submit">Sign In</button>
			<small>
				<router-link to="/signup">Sign up a new account</router-link>
			</small>
		</form>
	</section>
</template>

<script>
export default {
	methods: {
		goHome() {
			this.$router.push("/home");
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 458px;
	height: 500px;
	padding: 50px;
	margin: 90px auto;

	box-sizing: border-box;
	max-width: 1000px;
	border-radius: 22px;

	background: white;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

.field {
	padding: 15px 35px;
	border-radius: 30px;
	border: 0.5px solid #a4a4a4;
	color: #7b7b7b;
	outline: none;
	transition: 200ms;
	&:focus {
		box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.3);
	}
}

button {
	cursor: pointer;
	padding: 15px 0;
	font-size: 18px;
	border: none;
	color: white;
	border-radius: 30px;

	background: rgb(0, 165, 255);
	background: linear-gradient(
		250deg,
		rgba(0, 165, 255, 1) 0%,
		rgba(0, 194, 251, 1) 17%,
		rgba(0, 212, 251, 1) 35%,
		rgba(35, 226, 255, 1) 100%
	);

	transition: 500ms;

	&:hover {
		font-weight: bold;
	}
}

h2 {
	margin: 0;
	color: #a9a9a9;
	font-family: "Montserrat";
	font-weight: unset;
	font-size: 18px;
}

h1 {
	margin: 0;
	margin-bottom: 20px;
	font-size: 60px;
	color: #00bffc;
}

form {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 400px;

	input {
		margin-bottom: 10px;
	}

	button {
		margin-top: 20px;
		margin-bottom: 5px;
	}

	small {
		align-self: flex-start;
		font-size: 0.8em;
		margin-left: 30px;
	}
}
</style>
