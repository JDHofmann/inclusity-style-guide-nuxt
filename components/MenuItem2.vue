<template>
	<div :class="color" class="menuItem">
		<div class="submenu-btn-wrapper">
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
	</div>
</template>
<script>
export default {
	props: {
		title: String,
		name: String,
		color: String,
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

@mixin setColor($color) {
	.submenu-btn {
		background: var(--#{$color}-400);
		// colorless version
		// background: $white;
		// outline: 1px solid $gray-700;
		&:hover {
			background: var(--#{$color}-300);
		}
	}
	li {
		background: var(--#{$color}-200);
		background: var(--#{$color}-400);
		&:hover {
			background: var(--#{$color}-300);
		}
	}
}

// .red {
// 	@include setColor(red);
// }
// .orange {
// 	@include setColor(orange);
// }
// .green {
// 	@include setColor(green);
// }
.menuItem {
	position: relative;
}
.submenu-btn {
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	border: 1px solid $gray-900;
	span.h3-style {
		text-align: left;
		margin-top: 0;
		color: #171717;
		&:before {
			transform: translateY(-2px) rotate(-45deg) scale(1);
			border-bottom: 1px solid #171717;
			border-right: 1px solid #171717;
			content: '';
			display: inline-block;
			height: 6px;
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
	&.showing-menu-content {
		display: block;
	}
}
ul {
	padding: 0 22px;
}
li {
	list-style: none;
	padding: 5px 20px;
	margin: 0;
	margin-top: 5px;
	// border-radius: 5px;
	color: $gray-900;
	// color: #171717;
	& + li {
		box-shadow: 0px -1px $gray-900;
	}
}

@include sm() {
	.submenu-btn {
		border: 1px solid $gray-900;
		span.h3-style {
			text-align: left;
			padding: 0 20px;
			font-size: 18px;
			&:before {
				margin: 0 14px 0 0;
				vertical-align: middle;
			}
		}
	}
}
@include md() {
	.submenu-btn {
		span.h3-style {
			text-align: right;
			padding: 0 10px;
			padding: 0 20px;
			font-size: 18px;
			&:before {
				margin: 0 8px 0 0;
				vertical-align: middle;
				// border-color: $white;
			}
		}
		&.showing-menu-content {
			background: $gray-800;
			border-bottom: none;
			border-radius: 5px 5px 0 0;
			height: 42px;
			// &:after {
			// 	content: '';
			// 	height: 1px;
			// 	background: #f0f;
			// 	background: #fff;
			// 	position: absolute;
			// 	width: calc(100% - 2px);
			// 	bottom: -1px;
			// 	z-index: 5;
			// }
			span.h3-style {
				color: $white;
				&:before {
					border-color: $white;
				}
			}
		}
	}
	.navigation-dropdown-content {
		min-width: 100%;
		position: absolute;
		// position: relative;
		right: 0;
		width: max-content;
	}
	ul {
		padding: 0;
		border: 1px solid $gray-900;
	}
	li {
		text-align: right;
		// padding: 5px 10px;
	}
}
</style>
