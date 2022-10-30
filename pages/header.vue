<template>
	<div>
		<header role="banner">
			<div class="static-content">
				<img class="logo" src="logo.png" alt="Inclusity" />
				<button class="show-menu menu-btn">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<button class="hide-menu menu-btn">
					<span></span>
					<span></span>
				</button>
			</div>
			<div id="pop-out" class="pop-out-content" role="menu">
				<div class="mask"></div>
				<nav>
					<ul class="section-list">
						<li class="list-item">
							<h2 class="heading-underline-red">
								What is Inclusity
							</h2>
							<ul class="sub-list sub-list-red">
								<li>About Us</li>
								<li>Meet the Team</li>
								<li>Our Clients</li>
								<li>Blog</li>
							</ul>
						</li>
						<li class="list-item">
							<h2 class="heading-underline-orange">Services</h2>
							<ul class="sub-list sub-list-orange">
								<li>Online Services</li>
								<li>Training Programs</li>
								<li>Inclusion Consulting</li>
								<li>Coaching</li>
								<li>Presentations</li>
							</ul>
						</li>
						<li class="list-item">
							<h2 class="heading-underline-green">Contact</h2>
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
			// border: 1px solid $gray-700;
			background: $orange-500;
			height: 40px;
			width: 40px;
			padding: 0.43rem;
			border-radius: 8px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			span {
				display: block;
				height: 2px;
				width: 100%;
				line-height: 0px;
				// background: $gray-700;
				background: $white;
			}
		}
		.hide-menu {
			display: none;
		}
	}
}
.pop-out-content {
	position: absolute;
	// display: none;
	width: 100%;
	height: 100vh;
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
					padding-left: 1.3rem;
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
			}
			.sub-list {
				// padding-left: 2rem;
				&.sub-list-red li {
					background: rgba($red, 0.6);
					background: $red-400;
					// border: 1px solid rgba($red, .8)
				}
				&.sub-list-orange li {
					background: rgba($orange, 0.6);
					background: $orange-400;
					// border: 1px solid rgba($orange, .8)
				}
				&.sub-list-green li {
					background: rgba($green, 0.6);
					// border: 1px solid rgba($green, .8)
				}
				li {
					padding: 0.5rem 0 0.5rem 1.6rem;
					margin-top: 5px;
					border-radius: 5px;
					&:hover,
					&:focus {
						// text-decoration: underline;
						background: rgba($red, 0.4);
					}
				}
			}
		}
	}
}
</style>
