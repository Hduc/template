<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import CalendarSlider from './CalendarSlider.svelte';

	let swiperEl;

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
		}
	];

	onMount(() => {
		register();

		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 1,
				spaceBetween: 24,
				centeredSlides: false,
				loop: true,
				preventClicks: true,
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

<div class="col-lg-4 col-md-6">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="mb-3 mb-lg-4">
				<h3 class="mb-0">Working Schedule</h3>
			</div>
			<CalendarSlider />

			<div class="d-flex justify-content-between align-items-center mb-3">
				<span class="fw-medium">Upcoming Events:</span>
				<div class="swiper-pagination1 text-end" style="width: 100px;"></div>
			</div>

			<div class="swiper upcoming-events-slide">
				<swiper-container init="false" bind:this={swiperEl} class="swiper-wrapper">
					{#each events as event}
						<swiper-slide class="swiper-slide cursor">
							<div class="position-relative d-flex">
								<span class="wh-11 bg-primary rounded-1 d-inline-block position-relative top-1"
								></span>
								<div>
									<h4 class="fs-12 fw-semibold text-secondary mb-0 ms-1">{event.title}</h4>
									<p class="fs-12">
										<span class="text-primary">{event.date}</span> - {event.time}
									</p>
								</div>
							</div>
						</swiper-slide>
					{/each}
				</swiper-container>
			</div>
		</div>
	</div>
</div>
