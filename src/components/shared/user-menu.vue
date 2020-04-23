<template>
	<div class="user-menu">
		<img id="photo" :src="user.profile.photo" />
		<span id="name">{{ user.profile.name }}</span>
		<i id="dropdown-button">V</i>
		<ul v-show="isMenuOpen" id="menu">
			<router-link to="/home">Settings</router-link>
			<router-link to="/signin">Sign out</router-link>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from "../../model/user.model";

@Component({})
export default class UserMenuComponent extends Vue {
	private user: User = this.$store.state.user;
	private isMenuOpen = false;
}
</script>

<style lang="scss" scoped>
.user-menu {
	display: grid;
	grid-template-columns: 2fr 5fr 1fr;
	grid-template-rows: 1fr 2fr;
	grid-template-areas:
		"photo name dropdown-button"
		"photo . .";

	color: white;

	position: relative;
}

#photo {
	grid-area: photo;
}

#name {
	grid-area: name;
	font-size: 0.8em;
}

#dropdown-button {
	grid-area: "dropdown-button";
}

#menu {
	position: absolute;
}
</style>
