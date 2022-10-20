<template>
	<div class="accordian">
		{{ fontSizes }}

		<details>
			<summary>touch me</summary>
			<div class="accordian-content">
				<div class="flex-row-3">
					<span>small</span>
					<span>medium</span>
					<span>large</span>
				</div>
				<div class="flex-row-3">
					<span
						v-for="(item, index) in fontSizes"
						v-bind:key="index"
						>{{ item }}</span
					>
					<span>36px</span>
					<span>46px</span>
					<span>64px</span>
				</div>
				<ul>
					<li>300 weight</li>
					<li>Lato</li>
					<li>#3b3b3b</li>
				</ul>
			</div>
		</details>

		<button class="accordian-show-content">Show Details</button>
		<button class="accordian-hide-content">Hide Details</button>
	</div>
</template>

<script>
export default {
	props: {
		test: String,
		fontSizes: Array,
	},
}
</script>
