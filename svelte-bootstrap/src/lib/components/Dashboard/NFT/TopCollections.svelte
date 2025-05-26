<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl;

	const collections = [
		{
			image: '/assets/images/collections.png',
			overlayImage: '/assets/images/collections.gif',
			user: '/assets/images/user-76.gif',
			verify: '/assets/images/verify-2.svg',
			title: 'Christmas Eve',
			items: '3250'
		},
		{
			image: '/assets/images/collections-2.png',
			user: '/assets/images/user-76.gif',
			verify: '/assets/images/verify-2.svg',
			title: 'Walking Brain',
			items: '2230'
		},
		{
			image: '/assets/images/collections-3.png',
			user: '/assets/images/user-76.gif',
			verify: '/assets/images/verify-2.svg',
			title: 'Flying Flower',
			items: '8536'
		}
	];

	onMount(() => {
		register();

		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 1,
				spaceBetween: 25,
				centeredSlides: false,
				loop: false,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				},
				pagination: {
					clickable: true,
					el: '.swiper-pagination-top-collections'
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<div class="card-body p-4">
	<div class="mb-4 d-flex flex-wrap gap-2 justify-content-between align-items-center">
		<h3 class="mb-0">Top Collections</h3>
		<a href="/dashboar/nft" class="text-decoration-none text-primary fs-12">View More</a>
	</div>

	<swiper-container class="swiper top-collections-slide" init="false" bind:this={swiperEl}>
		{#each collections as collection}
			<swiper-slide>
				<div class="position-relative z-1">
					<a href="/dashboar/nft" class="d-block position-relative">
						<img src={collection.image} class="rounded-3" alt="collections" />
						{#if collection.overlayImage}
							<img
								src={collection.overlayImage}
								class="rounded-3 position-absolute top-0 start-0 end-0 bottom-0"
								alt="collections"
							/>
						{/if}
					</a>
					<div class="position-absolute bottom-0 start-50 translate-middle-x w-100 p-2">
						<div
							class="rounded-3 p-3 d-flex justify-content-between align-items-center"
							style="background: rgba(35, 39, 46, 0.70); backdrop-filter: blur(6px);"
						>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0 position-relative">
									<img
										src={collection.user}
										class="rounded-circle"
										style="width: 27px; height: 27px;"
										alt="user"
									/>
									<img
										src={collection.verify}
										style="width: 15px;"
										class="position-absolute top-100 start-100 translate-middle"
										alt="verify"
									/>
								</div>
								<div class="flex-grow-1 ms-4 position-relative top-2">
									<h4 class="fs-14 fw-semibold mb-0 text-white">{collection.title}</h4>
									<span class="fs-12" style="color: #B1BBC8;">{collection.items} Items</span>
								</div>
							</div>
							<a
								href="/dashboar/nft"
								class="d-inline-block text-secondary text-center rounded-circle text-decoration-none fs-16 hover-bg"
								style="width: 30px; height: 30px; line-height: 30px; background-color: #8695AA;"
								aria-label="view"
							>
								<i class="ri-arrow-right-line"></i>
							</a>
						</div>
					</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>

	<div class="swiper-pagination-top-collections text-center mt-2"></div>
</div>
