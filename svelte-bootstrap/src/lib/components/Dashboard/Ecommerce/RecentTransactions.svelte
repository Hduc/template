<script>
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import {
		BarChartIcon,
		CalendarIcon,
		ClockIcon,
		EyeIcon,
		MoreHorizontalIcon,
		PieChartIcon,
		RotateCwIcon,
		TrashIcon
	} from 'svelte-feather-icons';

	let open = false;
	let dropdownRef;

	function fadeScale(node, { delay = 0, duration = 150, easing = cubicOut, baseScale = 0.95 }) {
		const o = +getComputedStyle(node).opacity;
		const s = baseScale;

		return {
			delay,
			duration,
			easing,
			css: (t) => `
        opacity: ${t * o};
        transform: scale(${s + (1 - s) * t});
      `
		};
	}
</script>

<div class="col-xl-5 col-xxl-4 col-lg-5">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Recent Transactions</h3>

				<div class="dropdown action-opt" bind:this={dropdownRef}>
					<button
						class="btn bg-transparent p-0"
						type="button"
						aria-label="More options"
						on:click={() => (open = !open)}
					>
						<MoreHorizontalIcon />
					</button>

					{#if open}
						<ul
							class={`dropdown-menu dropdown-menu-end bg-white border box-shadow ${open ? 'show' : ''}`}
							transition:fadeScale
						>
							<li>
								<button on:click={() => (open = !open)} class="dropdown-item">
									<ClockIcon />
									Today
								</button>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}>
									<PieChartIcon />
									Last 7 Days
								</button>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><RotateCwIcon /> Last Month</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><CalendarIcon /> Last 1 Year</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><BarChartIcon /> All Time</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><EyeIcon /> View</button
								>
							</li>
							<li>
								<button class="dropdown-item" on:click={() => (open = !open)}
									><TrashIcon /> Delete</button
								>
							</li>
						</ul>
					{/if}
				</div>
			</div>

			<ul class="ps-0 mb-0 list-unstyled">
				<li class="d-flex align-items-center justify-content-between mb-3 pb-3">
					<div class="d-flex align-items-center">
						<div class="flex-shrink-0">
							<i
								class="material-symbols-outlined icon-circle bg-primary bg-opacity-10 text-primary text-center rounded-circle wh-40 lh-40"
								>credit_card</i
							>
						</div>
						<div class="flex-grow-1 ms-2">
							<h6 class="fw-medium fs16 mb-0">Master Card</h6>
							<span class="fs-12">23 Dec 2023 - 3:20 pm</span>
						</div>
					</div>
					<span class="fs-14 fw-medium text-success">+1,520</span>
				</li>
				<li class="d-flex align-items-center justify-content-between mb-3 pb-3">
					<div class="d-flex align-items-center">
						<div class="flex-shrink-0">
							<i
								class="material-symbols-outlined icon-circle bg-danger bg-opacity-10 text-danger text-center rounded-circle wh-40 lh-40"
								>redeem</i
							>
						</div>
						<div class="flex-grow-1 ms-2">
							<h6 class="fw-medium fs16 mb-0">Paypal</h6>
							<span class="fs-12">23 Dec 2023 - 3:20 pm</span>
						</div>
					</div>
					<span class="fs-14 fw-medium text-danger">-2,250</span>
				</li>
				<li class="d-flex align-items-center justify-content-between mb-3 pb-3">
					<div class="d-flex align-items-center">
						<div class="flex-shrink-0">
							<i
								class="material-symbols-outlined icon-circle bg-primary-div bg-opacity-10 text-primary-div text-center rounded-circle wh-40 lh-40"
								>account_balance</i
							>
						</div>
						<div class="flex-grow-1 ms-2">
							<h6 class="fw-medium fs16 mb-0">Wise</h6>
							<span class="fs-12">23 Dec 2023 - 3:20 pm</span>
						</div>
					</div>
					<span class="fs-14 fw-medium text-success">+3,560</span>
				</li>
				<li class="d-flex align-items-center justify-content-between mb-3 pb-3">
					<div class="d-flex align-items-center">
						<div class="flex-shrink-0">
							<i
								class="material-symbols-outlined icon-circle bg-info bg-opacity-10 text-info text-center rounded-circle wh-40 lh-40"
								>currency_ruble</i
							>
						</div>
						<div class="flex-grow-1 ms-2">
							<h6 class="fw-medium fs16 mb-0">Payoneer</h6>
							<span class="fs-12">23 Dec 2023 - 3:20 pm</span>
						</div>
					</div>
					<span class="fs-14 fw-medium text-success">+6,500</span>
				</li>
				<li class="d-flex align-items-center justify-content-between">
					<div class="d-flex align-items-center">
						<div class="flex-shrink-0">
							<i
								class="material-symbols-outlined icon-circle bg-primary bg-opacity-10 text-primary text-center rounded-circle wh-40 lh-40"
								>credit_score</i
							>
						</div>
						<div class="flex-grow-1 ms-2">
							<h6 class="fw-medium fs16 mb-0">Credit Card</h6>
							<span class="fs-12">23 Dec 2023 - 3:20 pm</span>
						</div>
					</div>
					<span class="fs-14 fw-medium text-danger">+4,320</span>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- <style>
	.dropdown-button {
		background: transparent;
		padding: 0;
		cursor: pointer;
		border: none;
	}
	.dropdown-menu {
		position: absolute;
		right: 0;
		top: 100%;
		margin-top: 6px;
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.375rem;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		z-index: 20;
		min-width: 180px;
		padding: 8px 0;
	}
	.dropdown-item {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		color: #374151;
		font-size: 14px;
		text-decoration: none;
		transition: background 0.2s;
	}
	.dropdown-item:hover {
		background: #f3f4f6;
	}
	.dropdown-icon {
		width: 16px;
		height: 16px;
	}
</style> -->
