<template>
	<div>
		<section class="content">
			<h1 class="h5-style">Home Page</h1>
			<h2>Styles</h2>
			<ul>
				<li><Nuxt-link to="/text-styles">Text Styles</Nuxt-link></li>
				<li><Nuxt-link to="/colors">Colors</Nuxt-link></li>
				<li><Nuxt-link to="/footer">Footer</Nuxt-link></li>
			</ul>
		</section>
		<section class="content">
			<h2>Headers</h2>
			<ul>
				
				<li><Nuxt-link to="/header-1">Header 1</Nuxt-link></li>
				<li><Nuxt-link to="/header-2">Header 2</Nuxt-link></li>
				<li><Nuxt-link to="/header-3">Header 3</Nuxt-link></li>
				
			</ul>
		</section>
	</div>

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
