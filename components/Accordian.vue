<template>
	<div class="accordian">
		<div class="flex-row-1-1">
			<p :class="content.class">{{ content.title }}</p>
			<p :class="content.class" class="dark">{{ content.title }}</p>
		</div>
		<details>
			<summary class="accordian-button">Details</summary>
			<div class="accordian-content">
				<div class="flex-row-3">
					<span>small</span>
					<span>medium</span>
					<span>large</span>
				</div>
				<div class="flex-row-3">
					<span>{{ content.sizes.small }}</span>
					<span>{{ content.sizes.med }}</span>
					<span>{{ content.sizes.large }}</span>
				</div>
				<ul>
					<li>{{ content.weight }}</li>
					<li>{{ content.font }}</li>
					<li>{{ content.hexCode }}</li>
				</ul>
			</div>
		</details>
	</div>
</template>

<script>
export default {
	props: {
		content: Object,
	},
}
</script>

<style scoped>
details span.dark {
	/* height: 1.5em; */
	display: flex;
	align-items: center;
	justify-content: center;
}
details {
	padding: 1rem 0;
}
.accordian-content {
	padding-top: 1rem;
}
</style>
