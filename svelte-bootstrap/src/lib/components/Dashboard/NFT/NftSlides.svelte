<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl;

	const nftItems = [
		{
			image: '/assets/images/nft-1.gif',
			id: '35246',
			title: 'Christmas Eve',
			creatorImage: '/assets/images/user-76.gif',
			bid: '5.50 ETH',
			highestBid: '9.75 ETH',
			rating: '9.2'
		},
		{
			image: '/assets/images/nft-2.png',
			id: '35247',
			title: 'Rotating Panda',
			creatorImage: '/assets/images/user-77.gif',
			bid: '12.50 ETH',
			highestBid: '10.75 ETH',
			rating: '9.5'
		},
		{
			image: '/assets/images/nft-3.gif',
			id: '35249',
			title: 'Cookies Live',
			creatorImage: '/assets/images/user-76.gif',
			bid: '20.50 ETH',
			highestBid: '17.75 ETH',
			rating: '9.3'
		},
		{
			image: '/assets/images/nft-4.gif',
			id: '35248',
			title: 'World Savior',
			creatorImage: '/assets/images/user-78.gif',
			bid: '10.50 ETH',
			highestBid: '9.75 ETH',
			rating: '9.7'
		}
	];

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
					delay: 3000,
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
</script>

<div class="px-2 px-sm-5 position-relative mb-4">
	<swiper-container class="swiper nft-slide" init="false" bind:this={swiperEl}>
		{#each nftItems as item}
			<swiper-slide>
				<div class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card">
					<a href="nft-details.html" class="d-block mb-3 text-decoration-none position-relative">
						<img src={item.image} class="rounded-3" alt="nft" />
						<span
							class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
						>
							Place Bid
						</span>
					</a>

					<div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
						<a href="creator-details.html" class="d-flex align-items-center text-decoration-none">
							<div class="flex-shrink-0">
								<img
									src={item.creatorImage}
									class="rounded-circle"
									style="width: 27px; height: 27px;"
									alt="user"
								/>
							</div>
							<div class="flex-grow-1 ms-2">
								<span class="fs-12">NFT ID: {item.id}</span>
								<h4 class="fw-semibold fs-14 mb-0">{item.title}</h4>
							</div>
						</a>
						<img
							src="/assets/images/verify.svg"
							class="cursor"
							alt="verify"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title="Verified"
						/>
					</div>

					<div class="d-flex justify-content-between align-items-center">
						<a href="nft-details.html" class="d-flex align-items-center text-decoration-none">
							<div class="flex-grow-1">
								<span class="fs-12 d-block mb-1"
									>Highest Bid: <span class="fw-semibold text-secondary">{item.highestBid}</span
									></span
								>
								<h4 class="fw-semibold fs-14 mb-0">{item.bid}</h4>
							</div>
						</a>
						<button class="bg-transparent p-0 border-0">
							<i class="ri-heart-fill fs-20 position-relative top-2" style="color: #EE3E08;"></i>
							<span class="text-secondary fs-12 fw-semibold">
								{item.rating}<span class="text-body">/10</span>
							</span>
						</button>
					</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>

	<!-- Swiper Navigation -->
	<div class="nft-controller">
		<div class="controller-icon prev">
			<i class="ri-arrow-left-line"></i>
		</div>
		<div class="controller-icon next">
			<i class="ri-arrow-right-line"></i>
		</div>
	</div>
</div>
