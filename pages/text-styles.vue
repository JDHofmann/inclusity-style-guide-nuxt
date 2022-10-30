<template>
	<section class="content">
		<h2 class="underline-red">{{ headingStyles.name }}</h2>
		<Accordian
			v-for="(h, i) in headingStyles.content"
			:key="i"
			:content="h"
		/>
		<h2 class="underline-orange">{{ nonHeadingStyles.name }}</h2>
		<Accordian
			v-for="(h, i) in nonHeadingStyles.content"
			:key="i"
			:content="h"
		/>
	</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['headingStyles', 'nonHeadingStyles', 'test']),
	},
	mounted() {
		// console.log(this.test, this.nonHeadingStyles)
	},
}
</script>
