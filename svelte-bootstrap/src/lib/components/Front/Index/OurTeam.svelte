<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	export let className = '';

	/** @type {import('swiper/element').SwiperContainer} */
	let swiperEl;

	onMount(() => {
		register();

		if (swiperEl) {
			Object.assign(swiperEl, {
				spaceBetween: 25,
				loop: true,
				navigation: {
					nextEl: '.next',
					prevEl: '.prev'
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
				breakpoints: {
					640: { slidesPerView: 2 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				}
			});
			swiperEl.initialize();
		}
	});

	const team = [
		{
			name: 'Michael Johnson',
			position: 'CEO',
			image: '/assets/images/landing/team-1.jpg'
		},
		{
			name: 'Emily Davis',
			position: 'Project Manager',
			image: '/assets/images/landing/team-2.jpg'
		},
		{
			name: 'Daniel Lee',
			position: 'Sales Team Lead',
			image: '/assets/images/landing/team-3.jpg'
		},
		{
			name: 'Olivia John',
			position: 'Frontend Lead',
			image: '/assets/images/landing/team-1.jpg'
		}
	];
</script>

<div class={`our-team-area position-relative z-1 ${className}`} id="ourteam">
	<div class="container">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 mb-lg-5">
			<div class="section-title ms-0 text-start mw-630 mb-0">
				<span class="top-title"><span>Our Team</span></span>
				<h2>Introducing Our Exceptional Team. Meet the Minds Driving Our Success</h2>
			</div>

			<div class="team-controller d-flex gap-3">
				<div class="controller-icon prev">
					<i class="ri-arrow-left-line"></i>
				</div>
				<div class="controller-icon next">
					<i class="ri-arrow-right-line"></i>
				</div>
			</div>
		</div>

		<!-- Swiper Element -->
		<swiper-container class="swiper team-slide" init="false" bind:this={swiperEl}>
			{#each team as member}
				<swiper-slide>
					<div class="our-team-single-item">
						<div class="team-img">
							<img src={member.image} alt={member.name} />
						</div>
						<div class="team-content d-flex justify-content-between align-items-center">
							<div>
								<h3>{member.name}</h3>
								<span>{member.position}</span>
							</div>
							<ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
								<li>
									<a
										href="https://www.facebook.com/"
										target="_blank"
										class="text-decoration-none fs-20 text-primary"
										aria-label="Facebook"
									>
										<i class="ri-facebook-fill"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.twitter.com/"
										target="_blank"
										class="text-decoration-none fs-20 text-primary"
										aria-label="Twitter"
									>
										<i class="ri-twitter-x-line"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/"
										target="_blank"
										class="text-decoration-none fs-20 text-primary"
										aria-label="LinkedIn"
									>
										<i class="ri-linkedin-fill"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>

	<img src="/assets/images/landing/shape-1.png" class="shape shape-3" alt="shape" />
	<img src="/assets/images/landing/shape-2.png" class="shape shape-4" alt="shape" />
</div>
