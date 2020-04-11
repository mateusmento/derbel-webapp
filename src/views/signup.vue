<template>
	<section class="signin">
		<header>
			<h1>Derbel</h1>
			<h3>Sign up a new account</h3>
		</header>

		<form>
			<input type="text" placeholder="Full Name" />
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			<button type="submit">Sign Up</button>
			<router-link to="/signin">Sign in with your account</router-link>
		</form>
	</section>
</template>
