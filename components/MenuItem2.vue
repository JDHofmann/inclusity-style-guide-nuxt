<template>
	<li class="menuItem">
		<div class="submenu-btn-wrapper" :class="gridColumn">
			<button
				@click="toggleMenu"
				class="submenu-btn"
				:class="
					isActive ? 'showing-menu-content' : 'hiding-menu-content'
				"
			>
				<span
					class="h3-style"
					:class="
						isActive
							? 'showing-menu-content'
							: 'hiding-menu-content'
					"
					>{{ title }}</span
				>
			</button>
		</div>
		<div
			class="navigation-dropdown-content"
			:class="isActive ? 'showing-menu-content' : 'hiding-menu-content'"
		>
			<ul>
				<slot></slot>
			</ul>
		</div>
	</li>
</template>
<script>
export default {
	props: {
		title: String,
		name: String,
		gridColumn: String,
		isActive: Boolean,
	},

	methods: {
		toggleMenu() {
			this.$emit('toggleSubMenuItem', this.name)
		},
	},
}
</script>
<style lang="scss" scoped>
@import 'assets/css/mixins';
$x-offset: 10px;
$y-offset: 10px;

// @mixin setColor($color) {
// 	.submenu-btn {
// 		background: var(--#{$color}-400);
// 		&:hover {
// 			background: var(--#{$color}-300);
// 		}
// 	}
// 	li {
// 		background: var(--#{$color}-200);
// 		background: var(--#{$color}-400);
// 		&:hover {
// 			background: var(--#{$color}-300);
// 		}
// 	}
// }

.submenu-btn {
	align-items: center;
	border: 1px solid $gray-900;
	border-radius: 5px;
	display: flex;
	height: 40px;
	width: 100%;
	span.h3-style {
		text-align: left;
		margin-top: 0;
		color: #171717;
		&:before {
			content: '';
			border-bottom: 1px solid $gray-900;
			border-right: 1px solid $gray-900;
			display: inline-block;
			height: 6px;
			transform: translateY(-2px) rotate(-45deg) scale(1);
			vertical-align: middle;
			width: 6px;
		}
		&.showing-menu-content {
			&:before {
				transform: translateY(-35%) rotate(45deg) scale(1);
			}
		}
	}
}
.navigation-dropdown-content {
	display: none;
	grid-column: span 9;
	&.showing-menu-content {
		display: block;
	}
}

ul {
	padding: 0 22px;
}
li {
	list-style: none;
	padding: 7.5px 20px;
	margin: 0;
	color: $gray-900;
	& + li:not(.menuItem) {
		box-shadow: 0px -1px $gray-900;
	}
}

@include sm() {
	.submenu-btn-wrapper {
		grid-column: span 9;
	}
	.submenu-btn {
		border: 1px solid $gray-900;
		span.h3-style {
			text-align: left;
			padding: 0 calc(2 * $y-offset);
			font-size: 18px;
			&:before {
				margin: 0 14px 0 0;
				vertical-align: middle;
			}
		}
	}
}
@include md() {
	$x-offset: 10px;
	$y-offset: 10px;
	.menuItem {
		// position: static;
		display: grid;
		grid-column: 1 / span 9;
		grid-template-columns: subgrid;
		grid-row: 1;
		gap: 5px;
	}
	.submenu-btn-wrapper {
		grid-column: span 2;
		// grid-row: 1;
		&.one {
			grid-column: 4 / span 2;
		}
		&.two {
			grid-column: 6 / span 2;
		}
		&.three {
			grid-column: 8 / span 2;
		}
	}

	.submenu-btn {
		span.h3-style {
			text-align: center;
			padding: 0 calc(2 * $y-offset);
			font-size: 18px;
			display: block;
			width: 100%;
			&:before {
				margin: 0 8px 0 0;
			}
		}
		&.showing-menu-content {
			background: $gray-800;
			border-bottom: none;
			border-radius: 5px 5px 0 0;
			span.h3-style {
				color: $white;
				&:before {
					border-color: $white;
				}
			}
		}
	}
	// .navigation-dropdown-content {
	// 	grid-column: span 9;
	// 	min-width: 100%;
	// 	width: max-content;
	// }
	ul {
		padding: 0;
		border: 1px solid $gray-900;
		border-radius: 5px;
	}
	li {
		text-align: center;
	}
}
</style>
