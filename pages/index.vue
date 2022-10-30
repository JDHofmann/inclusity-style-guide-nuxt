<template>
	<section class="content">
		<h1>Links</h1>
		<ul>
			<li><Nuxt-link to="/text-styles">Text Styles</Nuxt-link></li>
			<li><Nuxt-link to="/header">Header</Nuxt-link></li>
			<li><Nuxt-link to="/footer">Footer</Nuxt-link></li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'IndexPage',

	mounted() {
		// console.log(this.test, this.nonHeadingStyles)
	},
}
</script>
