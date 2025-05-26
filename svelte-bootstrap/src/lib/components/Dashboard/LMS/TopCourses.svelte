<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl;

	const courses = [
		{
			title: 'Python Programming',
			image: '/assets/images/courses-1.jpg',
			price: '$35.99',
			sections: '10 sections',
			lectures: '45 lectures',
			duration: '25h 50m'
		},
		{
			title: 'Basic Python',
			image: '/assets/images/event-5.jpg',
			price: '$49.99',
			sections: '12 sections',
			lectures: '46 lectures',
			duration: '30h 50m'
		},
		{
			title: 'Basic Grok',
			image: '/assets/images/event-5.jpg',
			price: '$49.99',
			sections: '12 sections',
			lectures: '46 lectures',
			duration: '30h 50m'
		}
	];

	onMount(() => {
		register();

		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				pagination: {
					el: '.swiper-pagination2',
					clickable: true
				},
				breakpoints: {
					576: { slidesPerView: 1 },
					768: { slidesPerView: 1 },
					992: { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<div class="col-lg-4">
	<swiper-container class="swiper courses-slide" init="false" bind:this={swiperEl}>
		{#each courses as course}
			<swiper-slide>
				<div
					class="card bg-card-bg-c bg-primary border-0 rounded-3 mb-4 overflow-hidden position-relative"
				>
					<div class="card-body p-4">
						<h3 class="mb-0 text-card-text-c fw-semibold">Our Top Courses</h3>

						<div class="d-flex align-items-center py-3">
							<div class="flex-shrink-0">
								<img src={course.image} class="wh-130-113 rounded-3" alt="courses" />
							</div>
							<div class="flex-grow-1 ms-3">
								<span class="d-block mb-2 text-white">{course.title}</span>
								<h3 class="mb-0 fs-20 text-white">{course.price}</h3>
							</div>
						</div>

						<h3 class="mb-2 fs-20 text-white">Course content</h3>
						<ul class="ps-0 mb-3 list-unstyled d-flex flex-wrap gap-2 gap-sm-0 list-dot">
							<li class="text-white">{course.sections}</li>
							<li class="text-white">{course.lectures}</li>
							<li class="text-white">{course.duration}</li>
						</ul>

						<div class="text-end">
							<a
								href="/dashboard/course-details"
								class="btn border-color-white text-white py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
							>
								<span class="py-sm-1 d-block">
									<i class="ri-add-line"></i>
									<span>View Details</span>
								</span>
							</a>
						</div>
					</div>
					<img src="/assets/images/shape.png" class="position-absolute top-0 end-0" alt="shape" />
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>

	<div class="swiper-pagination2 text-center mt-2"></div>
</div>
