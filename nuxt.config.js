export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Inclusity Style Guide v1.1',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~assets/css/main.css',
		// SCSS file in the project
		'~assets/css/main.scss',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/style-resources', '@nuxtjs/google-fonts'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	styleResources: {
		scss: [
			'./assets/vars/*.scss',
			'./assets/css/_colors.scss', // use underscore "_" & also file extension ".scss"
		],
	},
	googleFonts: {
		// download: true,
		families: {
			// "Abril Fatface": true,
			'Open Sans': [300, 400, 600, 700],
			Lato: [300, 400, 700],
		},
	},
}
