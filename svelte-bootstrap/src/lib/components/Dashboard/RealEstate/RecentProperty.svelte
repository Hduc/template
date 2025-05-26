<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl;

	const properties = [
		{
			image: '/assets/images/property-5.png',
			price: '$800,000',
			address: '35 Prince Consort Road',
			beds: '6 Bed',
			baths: '5 Bath',
			size: '5 Bath'
		},
		{
			image: '/assets/images/property-6.png',
			price: '$220,000',
			address: '58 Gateway Road Portland',
			beds: '8 Bed',
			baths: '6 Bath',
			size: '2000 sqft'
		},
		{
			image: '/assets/images/property-5.png',
			price: '$800,000',
			address: '35 Prince Consort Road',
			beds: '6 Bed',
			baths: '5 Bath',
			size: '5 Bath'
		},
		{
			image: '/assets/images/property-6.png',
			price: '$220,000',
			address: '58 Gateway Road Portland',
			beds: '8 Bed',
			baths: '6 Bath',
			size: '2000 sqft'
		}
	];

	onMount(() => {
		register();

		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 1,
				spaceBetween: 24,
				centeredSlides: false,
				preventClicks: true,
				loop: true,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				},
				pagination: {
					el: '.swiper-pagination3',
					clickable: true
				},
				breakpoints: {
					0: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1199: { slidesPerView: 2 },
					1400: { slidesPerView: 1 },
					1600: { slidesPerView: 1 },
					1700: { slidesPerView: 2 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<div class="card bg-primary-div bg-opacity-10 border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
			<h3 class="mb-0">Recent Property</h3>
			<div class="swiper-pagination3 text-end" style="width: 100px;"></div>
		</div>

		<swiper-container class="recent-property-slide" init="false" bind:this={swiperEl}>
			{#each properties as prop}
				<swiper-slide class="bg-white p-2 rounded-3">
					<img src={prop.image} class="rounded-3" alt="property" />
					<div class="mt-3">
						<h3 class="mb-2">{prop.price}</h3>
						<div class="d-flex flex-wrap gap-2 justify-content-between mb-2">
							<span>{prop.address}</span>
							<a
								href="/dashboard/real-estate"
								class="fs-14 text-primary fw-medium text-decoration-none">View More</a
							>
						</div>
						<div class="d-flex flex-wrap gap-3">
							<div class="d-flex align-items-center">
								<i class="ri-hotel-bed-line fs-18 text-primary"></i>
								<span class="ms-2">{prop.beds}</span>
							</div>
							<div class="d-flex align-items-center">
								<i class="ri-showers-line fs-18 text-primary"></i>
								<span class="ms-2">{prop.baths}</span>
							</div>
							<div class="d-flex align-items-center">
								<i class="ri-square-line fs-18 text-primary"></i>
								<span class="ms-2">{prop.size}</span>
							</div>
						</div>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>

<style>
	swiper-container::part(pagination) {
		text-align: right;
	}
</style>
