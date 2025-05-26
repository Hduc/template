<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl;

	// Dummy event data (optional: pass this as a prop)
	const events = [
		{
			title: 'Pythons Unleashed: A Development Expedition',
			date: 'April 15, 2024',
			time: '12.00 PM - 6.00 PM'
		},
		{
			title: 'Big Data Analytics',
			date: '15 Mar 2024',
			time: '01.00 PM - 7.00 PM'
		},
		{
			title: 'Introduction to Blockchain',
			date: '10 Mar 2024',
			time: '02.00 PM - 9.00 PM'
		},
		{
			title: 'Introduction to Svelte',
			date: '10 Mar 2024',
			time: '02.00 PM - 9.00 PM'
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
					el: '.swiper-pagination1',
					clickable: true
				}
			});

			swiperEl.initialize();
		}
	});
</script>

<!-- Pagination & Title -->
<div class="d-flex justify-content-between align-items-center mt-3 mt-sm-0 mb-3">
	<span class="fw-medium">Upcoming Events:</span>
	<div class="swiper-pagination1 text-end" style="width: 100px;"></div>
</div>

<!-- Swiper Web Component Slider -->
<swiper-container class="swiper upcoming-events-slide" init="false" bind:this={swiperEl}>
	{#each events as event}
		<swiper-slide class="cursor">
			<div class="position-relative d-flex">
				<span class="wh-11 bg-primary rounded-1 d-inline-block position-relative top-1"></span>
				<div>
					<h4 class="fs-12 fw-semibold text-secondary mb-0 ms-1">
						{event.title}
					</h4>
					<p class="fs-12">
						<span class="text-primary">{event.date}</span> - {event.time}
					</p>
				</div>
			</div>
		</swiper-slide>
	{/each}
</swiper-container>
