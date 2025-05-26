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

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-0">
		<div class="p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
				<h3 class="mb-0">Top Instructors</h3>
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
		</div>

		<div class="default-table-area style-two top-instructors">
			<div class="table-responsive">
				<table class="table align-middle border-0">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Courses</th>
							<th scope="col">Ratings</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<a href="instructors.html" class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-25.jpg" class="wh-44 rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2 position-relative top-2">
										<h6 class="mb-0 fs-14 fw-medium">Olivia Clark</h6>
										<span class="fs-12 text-body">Big Data</span>
									</div>
								</a>
							</td>
							<td>55</td>
							<td>
								<ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>
								<a href="instructors.html" class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-26.jpg" class="wh-44 rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2 position-relative top-2">
										<h6 class="mb-0 fs-14 fw-medium">Ava Turner</h6>
										<span class="fs-12 text-body">UX/UI</span>
									</div>
								</a>
							</td>
							<td>120</td>
							<td>
								<ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-half-fill text-rating-color fs-16"></i>
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>
								<a href="instructors.html" class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-27.jpg" class="wh-44 rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2 position-relative top-2">
										<h6 class="mb-0 fs-14 fw-medium">Lucas Morgan</h6>
										<span class="fs-12 text-body">Developer</span>
									</div>
								</a>
							</td>
							<td>86</td>
							<td>
								<ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-line text-rating-color fs-16"></i>
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>
								<a href="instructors.html" class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-28.jpg" class="wh-44 rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2 position-relative top-2">
										<h6 class="mb-0 fs-14 fw-medium">Isabella Cooper</h6>
										<span class="fs-12 text-body">Designer</span>
									</div>
								</a>
							</td>
							<td>75</td>
							<td>
								<ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-half-fill text-rating-color fs-16"></i>
									</li>
									<li>
										<i class="ri-star-line text-rating-color fs-16"></i>
									</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="p-4">
			<div
				class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
			>
				<span class="fs-12 fw-medium">Items per pages: 5</span>

				<div class="d-flex align-items-center">
					<span class="fs-12 fw-medium me-2">1 - 5 of 12</span>
					<nav aria-label="Page navigation example">
						<ul class="pagination mb-0 justify-content-center">
							<li class="page-item">
								<a class="page-link icon" href="/dashboard/lms" aria-label="Previous">
									<i class="material-symbols-outlined">keyboard_arrow_left</i>
								</a>
							</li>
							<li class="page-item">
								<a class="page-link icon" href="/dashboard/lms" aria-label="Next">
									<i class="material-symbols-outlined">keyboard_arrow_right</i>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
