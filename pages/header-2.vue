<!-- this design aggressively references: -->
<!-- https://www.gov.uk/ -->

<template>
	<div>
		<header>
			<a
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
					<li class="menu-section-item">
						<MenuItem
							@toggleSubMenuItem="subMenuActiveItemUpdate"
							:isActive="subMenuActiveItem === 'what'"
							name="what"
							title="What is Inclusity"
							color="red"
						>
							<li>About Us</li>
							<li>Meet the Team</li>
							<li>Our Clients</li>
							<li>Blog</li>
						</MenuItem>
					</li>
					<li class="menu-section-item">
						<MenuItem
							@toggleSubMenuItem="subMenuActiveItemUpdate"
							:isActive="subMenuActiveItem === 'services'"
							name="services"
							title="Services"
							color="orange"
						>
							<li>Online Services</li>
							<li>Training Programs</li>
							<li>Inclusion Consulting</li>
							<li>Coaching</li>
							<li>Presentations</li>
						</MenuItem>
					</li>
					<li class="menu-section-item">
						<MenuItem
							@toggleSubMenuItem="subMenuActiveItemUpdate"
							:isActive="subMenuActiveItem === 'contact'"
							name="contact"
							title="Contact"
							color="green"
						>
							<li>
								<a href="https://www.inclusity.com/contact/"
									>Send Us a Message</a
								>
							</li>
							<li>
								<a
									href="https://www.instagram.com/inclusity.llc/"
									>Email Us Here</a
								>
							</li>
						</MenuItem>
					</li>
				</ul>
			</nav>
		</header>
		<div class="content">
			<h2>Demo content</h2>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quae ab illo inventore veritatis et quasi architecto beatae
				vitae dicta sunt explicabo.
			</p>
		</div>
		<section class="content">
			<h2>Quick Links</h2>
			<p><Nuxt-link to="/">Home</Nuxt-link></p>
		</section>
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

header {
	background: $white;
	padding: 10px;
	position: relative;
	top: 0;
	width: calc(100% - 20px);
	.logo {
		height: 40px;
	}
}
nav {
	.mobile-menu-btn {
		// background: $orange-700;
		border: 1px solid $gray-700;
		// color: $white;
		padding: 10px;
		position: absolute;
		top: 10px;
		right: 10px;
		left: auto;

		border: 1px solid $gray-700;
		// background: $orange-500;
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
		padding-top: 10px;
	}
	&.showing-menu-content {
		.mobile-menu-btn {
			// background: $gray-900;
			// background: $red-100;
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
		// ul {
		// 	display: block;
		// }
	}
	.navigation-dropdown-content {
		display: none;
	}
}
.menu-section-item {
	list-style: none;
	padding: 0;
	margin: 0;
}

@include sm() {
	.menu-section-item {
		& + .menu-section-item {
			margin-top: 5px;
		}
	}
	nav.showing-menu-content {
		ul {
			display: block;
		}
	}
}

@include md() {
	nav {
		.mobile-menu-btn {
			display: none;
		}
		ul {
			// display: block;
			display: flex;
			position: absolute;
			top: 10px;
			right: 10px;
			padding-top: 0;
			.menu-section-item {
				& + .menu-section-item {
					margin-left: 5px;
				}
			}
		}
	}
}
// section.content {
// 	margin-top: 100px;
// }
</style>
