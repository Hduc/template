<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let swiperEl;

	const nftItems = [
		{
			image: '/assets/images/nft-10.png',
			userImage: '/assets/images/user-76.gif',
			id: '35246',
			title: 'Christmas Eve',
			highestBid: '9.75 ETH',
			currentBid: '5.50 ETH',
			rating: '9.2'
		},
		{
			image: '/assets/images/nft-11.png',
			userImage: '/assets/images/user-77.gif',
			id: '35247',
			title: 'Humming Bird',
			highestBid: '10.75 ETH',
			currentBid: '12.50 ETH',
			rating: '9.5'
		},
		{
			image: '/assets/images/nft-12.png',
			userImage: '/assets/images/user-85.png',
			id: '35228',
			title: 'Naughty Pool',
			highestBid: '8.75 ETH',
			currentBid: '9.50 ETH',
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
					nextEl: '.nft-controller .next',
					prevEl: '.nft-controller .prev'
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
				breakpoints: {
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
	<h3 class="mb-0">Featured NFT Artworks</h3>
	<div class="nft-controller">
		<div class="controller-icon prev position-static" style="transform: unset;">
			<i class="ri-arrow-left-line"></i>
		</div>
		<div class="controller-icon next position-static" style="transform: unset;">
			<i class="ri-arrow-right-line"></i>
		</div>
	</div>
</div>

<swiper-container class="swiper nft-slide-two mb-4" init="false" bind:this={swiperEl}>
	{#each Array(2) as _}
		{#each nftItems as nft}
			<swiper-slide>
				<div class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card">
					<a href="nft-details.html" class="d-block mb-3 text-decoration-none position-relative">
						<img src={nft.image} class="rounded-3" alt="nft" />
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
									src={nft.userImage}
									class="rounded-circle"
									style="width: 27px; height: 27px;"
									alt="user"
								/>
							</div>
							<div class="flex-grow-1 ms-2">
								<span class="fs-12">NFT ID: {nft.id}</span>
								<h4 class="fw-semibold fs-14 mb-0">{nft.title}</h4>
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
							<div class="flex-grow-1 ms-2">
								<span class="fs-12 d-block mb-1"
									>Highest Bid: <span class="fw-semibold text-secondary">{nft.highestBid}</span
									></span
								>
								<h4 class="fw-semibold fs-14 mb-0">{nft.currentBid}</h4>
							</div>
						</a>
						<button class="bg-transparent p-0 border-0">
							<i class="ri-heart-fill fs-20 position-relative top-2" style="color: #EE3E08;"></i>
							<span class="text-secondary fs-12 fw-semibold"
								>{nft.rating}<span class="text-body">/10</span></span
							>
						</button>
					</div>
				</div>
			</swiper-slide>
		{/each}
	{/each}
</swiper-container>
