<template>
	<section class="content">
		<h2>{{ headingStyles.name }}</h2>
		<Accordian
			v-for="(h, i) in headingStyles.content"
			:key="i"
			:content="h"
		/>
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
	name: 'IndexPage',
	computed: {
		...mapState(['headingStyles', 'nonHeadingStyles', 'test']),
	},
	mounted() {
		console.log(this.test, this.nonHeadingStyles)
	},
}
</script>
