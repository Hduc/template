<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	import Binance from './Binance.svelte';
	import Bitcoin from './Bitcoin.svelte';
	import Cardano from './Cardano.svelte';
	import Ethereum from './Ethereum.svelte';
	import Solana from './Solana.svelte';

	let swiperEl;

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
				navigation: {
					nextEl: '.prev',
					prevEl: '.next'
				},

				breakpoints: {
					0: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					992: { slidesPerView: 3 },
					1199: { slidesPerView: 3 },
					1440: { slidesPerView: 4 },
					1600: { slidesPerView: 4 }
				}
			});

			swiperEl.initialize();
		}
	});
</script>

<div class="d-flex flex-wrap gap-2 justify-content-between mb-4">
	<div>
		<h3 class="mb-0">Cryptocurrency Watch List</h3>
	</div>
	<div>
		<div class="cryptocurrency-controller d-flex gap-1">
			<div class="controller-icon prev">
				<i class="ri-arrow-left-s-line"></i>
			</div>
			<div class="controller-icon next">
				<i class="ri-arrow-right-s-line"></i>
			</div>
		</div>
	</div>
</div>

<swiper-container class="swiper cryptocurrency-slide" init="false" bind:this={swiperEl}>
	<swiper-slide><Bitcoin /></swiper-slide>
	<swiper-slide><Ethereum /></swiper-slide>
	<swiper-slide><Solana /></swiper-slide>
	<swiper-slide><Binance /></swiper-slide>
	<swiper-slide><Cardano /></swiper-slide>
</swiper-container>
