<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl;

	const events = [
		{
			title: 'Science Fair',
			date: 'November 25, 2024',
			time: '9:00 AM - 3:00 PM',
			location: 'Auditorium'
		},
		{
			title: 'Science Fair',
			date: 'November 28, 2024',
			time: '9:00 AM - 3:00 PM',
			location: 'California'
		},
		{
			title: 'Science Fair',
			date: 'November 25, 2024',
			time: '9:00 AM - 3:00 PM',
			location: 'Auditorium'
		},
		{
			title: 'Science Fair',
			date: 'November 28, 2024',
			time: '9:00 AM - 3:00 PM',
			location: 'California'
		}
	];

	onMount(() => {
		register();

		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 1,
				spaceBetween: 25,
				centeredSlides: false,
				preventClicks: true,
				loop: false,
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				},
				pagination: {
					el: '.swiper-pagination-upcoming-events',
					clickable: true
				}
			});

			swiperEl.initialize();
		}
	});
</script>

<!-- Top Title + Pagination -->
<div class="d-flex justify-content-between align-items-center flex-wrap gap-1 pb-3">
	<h3 class="mb-0 fw-semibold">Upcoming Events</h3>
	<div class="swiper-pagination-upcoming-events text-end" style="width: 100px;"></div>
</div>

<!-- Swiper Svelte Component -->
<swiper-container class="swiper upcoming-events-slide-two" init="false" bind:this={swiperEl}>
	{#each events as event}
		<swiper-slide>
			<div class="bg-body-bg p-3 rounded-3" style="margin-top: 2px;">
				<div class="d-flex flex-wrap gap-1 justify-content-between mb-1">
					<span class="text-secondary fs-16 fw-medium">{event.title}</span>
					<span>{event.date}</span>
				</div>
				<div class="d-flex flex-wrap gap-1 justify-content-between">
					<span class="text-secondary d-flex align-items-center">
						<i class="ri-time-line fs-16 me-2"></i>
						<span>{event.time}</span>
					</span>
					<span class="text-secondary d-flex align-items-center">
						<i class="ri-map-pin-line fs-16 me-2"></i>
						<span>{event.location}</span>
					</span>
				</div>
			</div>
		</swiper-slide>
	{/each}
</swiper-container>
