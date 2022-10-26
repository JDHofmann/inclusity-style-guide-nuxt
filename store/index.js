import data from '~/static/data.json'

export const state = () => ({
	headingStyles: [],
	demo: ['demo', 'text'],
	test: ['demo', 'text'],
	nonHeadingStyles: [],
})

export const mutations = {
	SET_HEADINGS: (state, payload) => {
		let [headings] = payload.filter((i) => i.name == 'Headings')
		state.headingStyles = headings
	},
	SET_NONHEADINGS: (state, payload) => {
		let [nonHeadings] = payload.filter((i) => i.name == 'Non Headings')
		state.nonHeadingStyles = nonHeadings
	},
}

export const actions = {
	async nuxtServerInit({ commit }) {
		commit('SET_HEADINGS', data)
		commit('SET_NONHEADINGS', data)
	},
}
