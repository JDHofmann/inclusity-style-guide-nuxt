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
					Menu
				</button>
				<ul>
					<li>
						<MenuItem
							@toggleSubMenuItem="subMenuActiveItemUpdate"
							:isActive="subMenuActiveItem === 'what'"
							name="what"
							title="What is Inclusity"
						>
							<li>About Us</li>
							<li>Meet the Team</li>
							<li>Our Clients</li>
							<li>Blog</li>
						</MenuItem>
					</li>
					<li>
						<MenuItem
							@toggleSubMenuItem="subMenuActiveItemUpdate"
							:isActive="subMenuActiveItem === 'services'"
							name="services"
							title="Services"
						>
							<li>Online Services</li>
							<li>Training Programs</li>
							<li>Inclusion Consulting</li>
							<li>Coaching</li>
							<li>Presentations</li>
						</MenuItem>
					</li>
					<li>
						<MenuItem
							@toggleSubMenuItem="subMenuActiveItemUpdate"
							:isActive="subMenuActiveItem === 'contact'"
							name="contact"
							title="Contact"
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
	// align-items: center;
	background: $white;
	// display: flex;
	// justify-content: space-between;
	padding: 10px;
	position: fixed;
	top: 0;
	width: calc(100% - 20px);
	.logo {
		height: 40px;
	}
	nav {
		.mobile-menu-btn {
			background: $orange-700;
			color: $white;
			padding: 10px;
			position: absolute;
			top: 10px;
			right: 10px;
			left: auto;
		}
		ul {
			display: none;
			padding-top: 10px;
		}
		&.showing-menu-content {
			.mobile-menu-btn {
				background: $gray-900;
			}
			ul {
				display: block;
			}
		}
		.navigation-dropdown-content {
			display: none;
		}
	}
	li {
		list-style: none;
		padding: 0;
		margin: 0;
	}
}
</style>
