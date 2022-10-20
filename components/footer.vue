<template>
	<!-- taken directly from divi theme builder-->
	<div class="divi-footer-wrapper">
		<img
			alt=""
			src="https://www.inclusity.com/wp-content/uploads/2022/09/logo-mark_footer.png"
			class="logo-img footer-item"
		/>
		<hr />
		<nav aria-label="Footer Navigation" role="navigation">
			<ul class="menus footer-item">
				<li>
					<h4>What is Inclusity?</h4>
					<ul class="sub-menu">
						<li>
							<a href="https://www.inclusity.com/about/"
								>About Us</a
							>
						</li>
						<li>
							<a href="https://www.inclusity.com/meet-the-team/"
								>Meet the Team</a
							>
						</li>
						<li>
							<a href="https://www.inclusity.com/our-clients/"
								>Our Clients</a
							>
						</li>
						<li>
							<a href="https://www.inclusity.com/inclusion-blog/"
								>Blog</a
							>
						</li>
					</ul>
				</li>
				<li>
					<h4>Services</h4>
					<ul class="sub-menu">
						<li>
							<a
								href="https://www.inclusity.com/remote-connections/"
								>Online Services</a
							>
						</li>
						<li>
							<a
								href="https://www.inclusity.com/inclusion-training/"
								>Training Programs</a
							>
						</li>
						<li>
							<a
								href="https://www.inclusity.com/inclusion-consulting/"
								>Inclusion Consulting</a
							>
						</li>
						<li>
							<a href="https://www.inclusity.com/coaching/"
								>Coaching</a
							>
						</li>
						<li>
							<a href="https://www.inclusity.com/presentations/"
								>Presentations</a
							>
						</li>
					</ul>
				</li>
				<li>
					<h4>Contact Us</h4>
					<ul class="sub-menu">
						<li>
							<a href="https://www.inclusity.com/contact/"
								>Send Us a Message</a
							>
						</li>
						<li>
							<a href="mailto:  haley@inclusity.com"
								>Email Us Here</a
							>
						</li>
						<li>
							Phone: <a href="tel:513-320-1425">513-320-1425</a>
						</li>
						<li>
							<div class="address">
								<p>P.O. Box 880</p>
								<p>Perrysburg, OH 43552</p>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<hr />
		<div class="certificates footer-item">
			<img
				alt=""
				src="https://www.inclusity.com/wbe_seal_rgb-2018-e1520442761234/"
				class="certificate-item footer-item"
			/>
			<img
				alt=""
				src="https://www.inclusity.com/ohiominoritysupplierdevelopmentcouncillogo-3/"
				class="certificate-item footer-item"
			/>
			<img
				alt=""
				src="https://www.inclusity.com/prosci_certified_practitioner-2/"
				class="certificate-item footer-item"
			/>
		</div>
		<hr />
		<div class="socials footer-item">
			<a href="https://www.facebook.com/Inclusity"
				><img
					alt="instagram"
					src="https://www.inclusity.com/instagram-2/"
			/></a>
			<a href="https://www.instagram.com/inclusity.llc/"
				><img
					alt="facebook"
					src="https://www.inclusity.com/facebook-2/"
			/></a>
			<a href="https://www.linkedin.com/company/inclusity/"
				><img
					alt="linkedin"
					src="https://www.inclusity.com/linkedin-2/"
			/></a>
		</div>
		<div class="trademark footer-item">
			<span>© 2021 Inclusity, LLC</span>
		</div>
	</div>
</template>

<style lang="scss">
.divi-footer-wrapper {
	padding: 4vmin 2vmin 2vmin;
	max-width: 800px;
	margin: auto;
}
.divi-footer-wrapper hr {
	color: #cccac9;
}
.socials {
	text-align: center;
}
.socials img:hover,
.socials img:focus {
	outline: 3px solid #808080;
	outline-offset: 5px;
	border-radius: 50%;
}
.socials img {
	width: 45px;
	object-position: center;
	object-fit: contain;
	margin: 2vmin 3vmin 0;
	opacity: 0.395;
}

.menus {
	display: flex;
	justify-content: space-evenly;
}
.menus h4 {
	font-size: 18px !important;
	font-weight: 600;
}
.menus li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.sub-menu {
	margin: 0;
	padding: 0 !important;
}
.sub-menu a,
.sub-menu li {
	color: #575757 !important;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	list-style: none;
}
.address {
	margin: 0.25em 0;
}
.footer-item {
	margin: 2vmin auto;
}
.logo-img {
	opacity: 0.8;
	width: 125px;
	display: block;
	margin: 2vmin auto;
	object-position: center;
	object-fit: contain;
}
.address p {
	margin: 0;
	padding: 0;
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
}
.certificates {
	display: flex;
	justify-content: space-evenly;
}
.certificate-item {
	width: 15%;
	min-width: 100px;
	object-position: center;
	object-fit: contain;
}
.trademark {
	margin: 4vmin auto;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
}
</style>
