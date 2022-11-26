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
		<main style="margin-top: 100px">
			<div class="content">
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
			let popOut = document.getElementById('pop-out')
			if (this.isActive) {
				this.isActive = !this.isActive
				popOut.style.display = 'none'
				return this.isActive
			} else {
				popOut.style.display = 'block'
				setTimeout(() => {
					this.isActive = !this.isActive
					return this.isActive
				}, '1')
			}
		},
	},
}
</script>
<style lang="scss">
@import 'assets/css/mixins';
header {
	// outline: 1px solid #000088;
	background: $white;

	.static-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		position: fixed;
		width: calc(100% - 20px);
		top: 0;
		// box-shadow: 0 2px 0 0 $orange-700;

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
			$line-height: 1px;
			transition: 0.5s ease;
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
#pop-out {
	display: none;
}
.pop-out-content {
	// alter display property & opacity to show&hide
	background: $white;
	// display: block;
	height: 100%;
	left: 0;
	opacity: 0;
	position: fixed;
	top: 60px;
	// transition: 0.66s ease-in-out;
	transition: transform 0.35s, opacity 0.35s;
	width: 100%;
	z-index: 100;
	&:after {
		background: linear-gradient(90deg, $orange-300, $orange-500);
		bottom: 0;
		content: '';
		display: block;
		height: 100%;
		left: 0;
		opacity: 0.5;
		position: absolute;
		width: 100%;
		z-index: 5;
	}
	nav {
		background: $white;
		display: block;
		height: calc(100% - 60px);
		margin: 10px 0 0;
		max-height: $lg;
		opacity: 0;
		overflow: auto;
		position: relative;
		transition: transform 0.35s, opacity 0.9s;
		width: 100%;
		z-index: 10;
		@include md {
			width: 500px;
		}

		.section-list {
			box-sizing: border-box;
			max-width: 100%;
			min-height: 610px;
			overflow-x: hidden;
			padding: 20px 0;
			position: absolute;
			width: 100%;
			@include md {
				// width: 300px;
			}
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
					margin: 1em 0 0;
					font-weight: 400;
					&.heading-underline-orange {
						box-shadow: none;
					}
					&.heading-underline-red {
						box-shadow: none;
					}
					&.heading-underline-green {
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
		display: block;
		opacity: 1;
		nav {
			opacity: 1;
		}
	}
}
</style>
