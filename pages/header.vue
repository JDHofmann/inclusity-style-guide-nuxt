<template>
	<div>
		<header role="banner">
			<div class="static-content">
				<img class="logo" src="logo.png" alt="Inclusity" />
				<button
					aria-haspopup="true"
					aria-expanded="false"
					@click="toggleMenu"
					class="menu-btn"
					:class="isActive ? 'close-menu' : 'open-menu'"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<!-- <button class="hide-menu menu-btn">
					<span></span>
					<span></span>
				</button> -->
			</div>
			<div
				id="pop-out"
				class="pop-out-content"
				role="menu"
				:class="isActive ? 'show-menu-content' : 'hide-menu-content'"
			>
				<div class="mask"></div>
				<nav>
					<ul class="section-list">
						<li class="list-item">
							<h2>What is Inclusity</h2>
							<ul class="sub-list sub-list-red">
								<li>About Us</li>
								<li>Meet the Team</li>
								<li>Our Clients</li>
								<li>Blog</li>
							</ul>
						</li>
						<li class="list-item">
							<h2>Services</h2>
							<ul class="sub-list sub-list-orange">
								<li>Online Services</li>
								<li>Training Programs</li>
								<li>Inclusion Consulting</li>
								<li>Coaching</li>
								<li>Presentations</li>
							</ul>
						</li>
						<li class="list-item">
							<h2>Contact</h2>
							<ul class="sub-list sub-list-green">
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
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<main style="margin-top: 50px">
			<div>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo.
				</p>
			</div>
		</main>
	</div>
</template>
<script>
export default {
	layout: 'empty',
	data() {
		return {
			isActive: false,
		}
	},
	methods: {
		toggleMenu() {
			this.isActive = !this.isActive
			return this.isActive
		},
	},
}
</script>
<style lang="scss">
header {
	// outline: 1px solid #000088;
	background: $white;

	.static-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.65rem;
		// box-shadow: 0 2px 0 0 $orange-300;
		// border-bottom: 1px solid $gray-500;
		.logo {
			height: 40px;
		}
		.menu-btn {
			border: 1px solid $gray-700;
			// background: $orange-500;
			height: 40px;
			width: 40px;
			padding: 0.43rem;
			border-radius: 8px;
			// display: flex;
			// flex-direction: column;
			// justify-content: space-around;
			$line-height: 1px;
			position: relative;
			span {
				display: block;
				height: $line-height;
				width: 25px;
				line-height: 0px;
				background: $gray-700;
				// background: $white;
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
			&.close-menu {
				background: $red-100;
				// justify-content: center;
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
	}
}
.pop-out-content {
	position: absolute;
	// display: none;
	width: 100%;
	height: 100vh;
	height: 0;
	overflow: hidden;
	transition: 0.5s ease;
	max-height: calc(100vh - 40px + (2 * 0.65rem) + 2px);
	top: calc(40px + (2 * 0.65rem) + 2px);

	.mask {
		position: absolute;
		background: rgba($gray-900, 0.5);
		height: 100%;
		width: 100%;
	}
	nav {
		background: $white;
		position: absolute;
		// add margin for larger sizes
		// margin: 1rem;
		width: 100%;
		height: 100%;
		// height: calc( 100% - (40px + ( 2 * .65rem) + 5px));
		// height: calc(100% - 65.8px);
		.section-list {
			padding: 1.3rem;
			// outline: 1px solid $red;
			position: absolute;
			// med size and up:
			// top: 50%;
			left: 50%;
			width: calc(100% - 2rem);
			transform: translate(-50%, -50%);
			transform: translate(-50%);
			li {
				list-style-type: none;
				a {
					color: inherit;
					text-decoration: none;
					&:hover,
					&:focus {
						text-decoration: underline;
					}
				}
				h2 {
					padding-left: 1.6rem;
					// box-shadow: none;
					// border-bottom: 1px solid $gray-700;
					// margin: 1.5em 0 0.5em;
					margin: 1em 0 0;
					font-weight: 400;
					&.heading-underline-orange {
						// @include heading-underline-orange(2px);
						box-shadow: none;
					}
					&.heading-underline-red {
						// @include heading-underline-red(2px);
						box-shadow: none;
					}
					&.heading-underline-green {
						// @include heading-underline-green(2px);
						box-shadow: none;
					}
				}
			}
			.list-item {
				padding-bottom: 1em;
				margin: 0;
			}
			.sub-list {
				// padding-left: 2rem;
				&.sub-list-red li {
					background: $red-400;
					// border: 1px solid rgba($red, .8)
					&:hover,
					&:focus {
						background: $red-300;
					}
				}
				&.sub-list-orange li {
					background: $orange-400;
					// border: 1px solid rgba($orange, .8)
					&:hover,
					&:focus {
						background: $orange-300;
					}
				}
				&.sub-list-green li {
					background: $green-400;
					// border: 1px solid rgba($green, .8)
					&:hover,
					&:focus {
						background: $green-200;
					}
				}
				li {
					padding: 0.5rem 0 0.5rem 1.6rem;
					margin-top: 5px;
					border-radius: 5px;
				}
			}
		}
	}
	&.show-menu-content {
		// display: block;
		height: 100vh;
	}
}
</style>
