<template>
	<div>
		<button @click="toggleMenu">
			<span class="h3-style">{{ title }}</span>
		</button>
		<div
			class="navigation-dropdown-content"
			:class="isActive ? 'showing-menu-content' : 'hiding-menu-content'"
		>
			<ul>
				<slot></slot>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
		name: String,
		isActive: Boolean,
	},
	methods: {
		toggleMenu() {
			this.$emit('toggleSubMenuItem', this.name)
		},
	},
}
</script>
<style lang="scss">
@import 'assets/css/mixins';

.navigation-dropdown-content {
	display: none;
	&.showing-menu-content {
		display: block;
	}
}

li {
	list-style: none;
	padding: 0;
	margin: 0;
}
</style>
