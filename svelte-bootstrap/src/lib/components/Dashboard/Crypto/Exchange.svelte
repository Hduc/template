<script>
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import { onMount } from 'svelte';

	let openDropdown1 = false;
	let openDropdown2 = false;

	const toggleDropdown1 = () => {
		openDropdown1 = !openDropdown1;
		openDropdown2 = false;
	};

	const toggleDropdown2 = () => {
		openDropdown2 = !openDropdown2;
		openDropdown1 = false;
	};

	const closeDropdowns = () => {
		openDropdown1 = false;
		openDropdown2 = false;
	};

	onMount(() => {
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.dropdown')) {
				closeDropdowns();
			}
		});
	});
</script>

<div class="col-lg-4">
	<div
		class="card p-0 border-0 rounded-3 mb-4 exchange-for-dark"
		style="background-color: #F3E8FF;"
	>
		<div
			class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4 p-3 px-4"
			style="border-bottom: 1px solid #D5D9E2;"
		>
			<div><h3 class="mb-0">Exchange</h3></div>
			<button class="p-0 border-0 bg-transparent position-relative top-3">
				<span class="material-symbols-outlined">replay</span>
			</button>
		</div>

		<form class="p-4 pt-0">
			<!-- Dropdown 1 -->
			<div class="mb-30">
				<div class="d-flex justify-content-between align-items-center mb-3">
					<span>SELLING</span>
					<span>MAX 4,238</span>
				</div>

				<div class="dropdown action-opt mb-3">
					<button
						on:click|preventDefault={toggleDropdown1}
						type="button"
						class="btn bg-transparent p-0 d-flex justify-content-between align-items-center w-100"
					>
						<div>
							<img src="/assets/images/ethereum.png" style="width: 42px;" alt="cardano" />
							<span class="fs-14 fw-semibold text-secondary ms-1">ETHEREUM (ETH)</span>
						</div>
						<ChevronDownIcon color="#3A4252" />
					</button>
					{#if openDropdown1}
						<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow w-100 show">
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/ethereum.png" style="width: 24px;" alt="ethereum" />
									<span class="ms-1">Ethereum (BTC)</span></a
								>
							</li>
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/solana.png" style="width: 24px;" alt="solana" />
									<span class="ms-1">Solana (SOL)</span></a
								>
							</li>
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/binance.png" style="width: 24px;" alt="binance" />
									<span class="ms-1">Binance (BNB)</span></a
								>
							</li>
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/bitcoin.png" style="width: 24px;" alt="cardano" />
									<span class="ms-1">Cardano (ADA)</span></a
								>
							</li>
						</ul>
					{/if}
				</div>

				<div class="position-relative z-1">
					<input type="text" class="form-control h-55 bg-white border-0" placeholder="1 ETH" />
					<span class="fs-14 position-absolute top-50 end-0 translate-middle-y pe-3">$1750</span>
				</div>
			</div>

			<!-- Dropdown 2 -->
			<div class="mb-30">
				<div class="d-flex justify-content-between align-items-center mb-3">
					<span>SELLING</span>
					<span>MAX 4,238</span>
				</div>

				<div class="dropdown action-opt mb-3">
					<button
						on:click|preventDefault={toggleDropdown2}
						type="button"
						class="btn bg-transparent p-0 d-flex justify-content-between align-items-center w-100"
					>
						<div>
							<img src="/assets/images/solana.png" style="width: 42px;" alt="solana" />
							<span class="fs-14 fw-semibold text-secondary ms-1">SOLANA (SOL)</span>
						</div>
						<ChevronDownIcon color="#3A4252" />
					</button>
					{#if openDropdown2}
						<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow w-100 show">
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/ethereum.png" style="width: 24px;" alt="ethereum" />
									<span class="ms-1">Ethereum (BTC)</span></a
								>
							</li>
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/solana.png" style="width: 24px;" alt="solana" />
									<span class="ms-1">Solana (SOL)</span></a
								>
							</li>
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/binance.png" style="width: 24px;" alt="binance" />
									<span class="ms-1">Binance (BNB)</span></a
								>
							</li>
							<li>
								<a class="dropdown-item text-secondary" href="/#"
									><img src="/assets/images/bitcoin.png" style="width: 24px;" alt="cardano" />
									<span class="ms-1">Cardano (ADA)</span></a
								>
							</li>
						</ul>
					{/if}
				</div>

				<div class="position-relative z-1">
					<input type="text" class="form-control h-55 bg-white border-0" placeholder="75 SOL" />
					<span class="fs-14 position-absolute top-50 end-0 translate-middle-y pe-3">$35</span>
				</div>
			</div>

			<button type="submit" class="btn btn-primary py-2 px-4 w-100">
				<span class="d-inline-block py-1">Exchange</span>
			</button>
		</form>
	</div>
</div>
