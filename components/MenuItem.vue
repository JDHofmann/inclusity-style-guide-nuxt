<template>
	<div :class="color" class="menuItem">
		<div class="submenu-btn-wrapper">
			<button @click="toggleMenu" class="submenu-btn">
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

.red {
	@include setColor(red);
}
.orange {
	@include setColor(orange);
}
.green {
	@include setColor(green);
}
.menuItem {
	position: relative;
}
.submenu-btn {
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 5px;
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
	padding-left: 22px;
}
li {
	list-style: none;
	padding: 5px 20px;
	margin: 0;
	margin-top: 5px;
	border-radius: 5px;
	color: $gray-900;
	// color: #171717;
}

@include sm() {
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
@include md() {
	span.h3-style {
		text-align: right;
		// padding: 0 10px;
		padding: 0 20px;
		font-size: 18px;
		&:before {
			margin: 0 8px 0 0;
			vertical-align: middle;
		}
	}
	.navigation-dropdown-content {
		background: #ffffff;
		border-bottom: 5px solid #fff;
		border-left: 5px solid #fff;
		border-radius: 5px;
		border-right: 5px solid #fff;
		box-shadow: 0 5px 5px 0px $gray-200;
		position: absolute;
		right: -5px;
		width: max-content;
	}
	ul {
		padding-left: 0;
	}
	li {
		text-align: right;
		// padding: 5px 10px;
	}
}
</style>
