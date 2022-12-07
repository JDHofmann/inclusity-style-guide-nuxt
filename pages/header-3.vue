<!-- this design aggressively references: -->
<!-- https://www.gov.uk/ -->

<template>
	<div>
		<header>
			<a
				class="logo-wrapper"
				href="https://www.inclusity.com/"
				title="go to inclusity.com homepage"
			>
				<img class="logo" src="logo.png" alt="Inclusity" />
			</a>
			<nav
				:class="
					menuIsActive
						? 'showing-menu-content'
						: 'hiding-menu-content'
				"
			>
				<button class="mobile-menu-btn" @click="toggleMenu">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<ul>
					<MenuItem2
						class="menu-section-item"
						@toggleSubMenuItem="subMenuActiveItemUpdate"
						:isActive="subMenuActiveItem === 'what'"
						name="what"
						title="What is Inclusity"
						gridColumn="one"
					>
						<li>About Us</li>
						<li>Meet the Team</li>
						<li>Our Clients</li>
						<li>Blog</li>
					</MenuItem2>
					<MenuItem2
						class="menu-section-item"
						@toggleSubMenuItem="subMenuActiveItemUpdate"
						:isActive="subMenuActiveItem === 'services'"
						name="services"
						title="Services"
						gridColumn="two"
					>
						<li>Online Services</li>
						<li>Training Programs</li>
						<li>Inclusion Consulting</li>
						<li>Coaching</li>
						<li>Presentations</li>
					</MenuItem2>
					<MenuItem2
						class="menu-section-item"
						@toggleSubMenuItem="subMenuActiveItemUpdate"
						:isActive="subMenuActiveItem === 'contact'"
						name="contact"
						title="Contact"
						gridColumn="three"
					>
						<li>
							<a href="https://www.inclusity.com/contact/"
								>Send Us a Message</a
							>
						</li>
						<li>
							<a href="https://www.instagram.com/inclusity.llc/"
								>Email Us Here</a
							>
						</li>
					</MenuItem2>
				</ul>
			</nav>
		</header>
		<section class="content">
			<h2>Quick Links</h2>
			<p><Nuxt-link to="/">Home</Nuxt-link></p>
		</section>
		<div class="content">
			<h2>Demo content</h2>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quae ab illo inventore veritatis et quasi architecto beatae
				vitae dicta sunt explicabo.
			</p>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'empty',
	data() {
		return {
			menuIsActive: false,
			subMenuActiveItem: '',
		}
	},
	methods: {
		toggleMenu() {
			if (!this.menuIsActive) {
				this.menuIsActive = true
			} else {
				this.subMenuActiveItem = null
				this.menuIsActive = false
			}
			return this.menuIsActive
		},
		subMenuActiveItemUpdate(name) {
			if (this.subMenuActiveItem === name) {
				this.subMenuActiveItem = null
			} else {
				this.subMenuActiveItem = name
			}
		},
	},
}
</script>
<style lang="scss" scoped>
@import 'assets/css/mixins';
$x-offset: 10px;
$y-offset: 10px;
header {
	background: $white;
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	padding: $x-offset $y-offset;
	width: calc(100% - calc(2 * $x-offset));
	.logo-wrapper {
		grid-column: 1 / span 2;
		grid-row: 1;
		height: auto;
		display: block;
		.logo {
			height: 40px;
		}
	}
}
nav {
	grid-column: 1 / span all;

	display: grid;
	grid-template-columns: subgrid;
	.mobile-menu-btn {
		border: 1px solid $gray-700;
		padding: $x-offset $y-offset;
		position: absolute;
		top: $y-offset;
		right: $x-offset;
		left: auto;

		border: 1px solid $gray-700;
		height: 40px;
		width: 40px;
		padding: 0.43rem;
		border-radius: 8px;
		$line-height: 1px;
		transition: 0.5s ease;
		span {
			display: block;
			height: $line-height;
			width: 25px;
			line-height: 0px;
			background: $gray-700;
			position: absolute;
			top: 50%;
			transition: 0.5s ease;
			&:nth-child(1) {
				transform: translateY(-8px);
			}
			&:nth-child(3) {
				transform: translateY(8px);
			}
		}
	}
	ul {
		display: none;
		padding-top: $y-offset;
		grid-column: 1 / span all;
		grid-template-columns: subgrid;
	}
	&.showing-menu-content {
		.mobile-menu-btn {
			span {
				&:nth-child(1) {
					transform: rotate(45deg) translate(0);
				}
				&:nth-child(2) {
					opacity: 0;
				}
				&:nth-child(3) {
					transform: rotate(-45deg) translate(0);
				}
			}
		}
	}
	.navigation-dropdown-content {
		display: none;
	}
}
.menu-section-item {
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	grid-column: 1 / span all;
	grid-template-columns: subgrid;
}

@include sm() {
	.menu-section-item {
		& + .menu-section-item {
			margin-top: 5px;
		}
	}
	nav.showing-menu-content {
		ul {
			display: grid;
		}
	}
}

@include md() {
	nav {
		width: 100%;
		grid-row: 1;
		.mobile-menu-btn {
			display: none;
		}
		ul {
			top: $y-offset;
			right: $x-offset;
			padding-top: 0;
			display: grid;

			.menu-section-item {
				& + .menu-section-item {
					margin-left: 5px;
				}
			}
		}
	}
}
</style>
