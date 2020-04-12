<template>
	<div class="user-menu">
		<img :src="user.profile.photo" />
		<span>{{ user.profile.name }}</span>
		<i>More Options</i>
		<ul class="menu">
			<router-link>Settings</router-link>
			<router-link>Sign out</router-link>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from "../../model/user.model";

@Component({})
export default class UserMenuComponent extends Vue {
	private user: User = this.$store.state.user;
}
</script>
