<script>
	import { onClickOutside } from '$lib/actions/onClickOutside';
	import { fly } from 'svelte/transition';

	let open = false;

	const options = [
		{
			name: 'Ethereum (BTC)',
			img: '/assets/images/ethereum.png',
			alt: 'ethereum'
		},
		{
			name: 'Solana (SOL)',
			img: '/assets/images/solana.png',
			alt: 'solana'
		},
		{
			name: 'Binance (BNB)',
			img: '/assets/images/binance.png',
			alt: 'binance'
		},
		{
			name: 'Cardano (ADA)',
			img: '/assets/images/bitcoin.png',
			alt: 'cardano'
		}
	];
</script>

<div class="dropdown action-opt m-sm-3" use:onClickOutside={() => (open = false)}>
	<button
		class="btn bg-transparent p-0 d-flex align-items-center"
		type="button"
		on:click={() => (open = !open)}
	>
		<img src="/assets/images/cardano.png" style="width: 24px;" alt="cardano" />
		<span class="fs-14 fw-semibold text-secondary ms-1">Bitcoin</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			style="stroke: #3A4252;"
			class="ms-1"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if open}
		<ul
			class="dropdown-menu dropdown-menu-end bg-white border box-shadow mt-2 show"
			in:fly={{ y: -5, duration: 150 }}
		>
			{#each options as option}
				<li>
					<button
						class="dropdown-item text-secondary d-flex align-items-center"
						on:click={() => (open = !open)}
					>
						<img src={option.img} style="width: 24px;" alt={option.alt} />
						<span class="ms-1">{option.name}</span>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
