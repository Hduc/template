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

<div class="col-xxl-4">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-0">
			<div class="p-4">
				<div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
					<h3 class="mb-0">Student’s Progress</h3>
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
								<th scope="col">Course Name</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<a href="instructors.html" class="d-flex align-items-center">
										<h6 class="mb-0 fs-14 fw-medium">Olivia Clark</h6>
									</a>
								</td>
								<td class="text-body">Web Design</td>
								<td>
									<div
										class="progress bg-opacity-10 bg-primary"
										role="progressbar"
										aria-label="Example with label"
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
										style="height: 5px;"
									>
										<div class="progress-bar rounded-pill" style="width: 50%; height: 5px;"></div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<a href="instructors.html" class="d-flex align-items-center">
										<h6 class="mb-0 fs-14 fw-medium">Alexander Garcia</h6>
									</a>
								</td>
								<td class="text-body">Python Dev.</td>
								<td>
									<div
										class="progress bg-opacity-10 bg-success"
										role="progressbar"
										aria-label="Example with label"
										aria-valuenow="80"
										aria-valuemin="0"
										aria-valuemax="100"
										style="height: 5px;"
									>
										<div
											class="progress-bar bg-success rounded-pill"
											style="width: 80%; height: 5px;"
										></div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<a href="instructors.html" class="d-flex align-items-center">
										<h6 class="mb-0 fs-14 fw-medium">Chloe Lewis</h6>
									</a>
								</td>
								<td class="text-body">Front-end</td>
								<td>
									<div
										class="progress bg-opacity-10 bg-primary-div"
										role="progressbar"
										aria-label="Example with label"
										aria-valuenow="30"
										aria-valuemin="0"
										aria-valuemax="100"
										style="height: 5px;"
									>
										<div
											class="progress-bar rounded-pill bg-primary-div"
											style="width: 30%; height: 5px;"
										></div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<a href="instructors.html" class="d-flex align-items-center">
										<h6 class="mb-0 fs-14 fw-medium">Ava Turner</h6>
									</a>
								</td>
								<td class="text-body">Back-end</td>
								<td>
									<div
										class="progress bg-opacity-10 bg-danger"
										role="progressbar"
										aria-label="Example with label"
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
										style="height: 5px;"
									>
										<div
											class="progress-bar bg-danger rounded-pill"
											style="width: 50%; height: 5px;"
										></div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<a href="instructors.html" class="d-flex align-items-center">
										<h6 class="mb-0 fs-14 fw-medium">Ryan Flores</h6>
									</a>
								</td>
								<td class="text-body">Data Analytics</td>
								<td>
									<div
										class="progress bg-opacity-10 bg-primary"
										role="progressbar"
										aria-label="Example with label"
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
										style="height: 5px;"
									>
										<div class="progress-bar rounded-pill" style="width: 50%; height: 5px;"></div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<a href="instructors.html" class="d-flex align-items-center">
										<h6 class="mb-0 fs-14 fw-medium">John Doe</h6>
									</a>
								</td>
								<td class="text-body">Plugin Dev.</td>
								<td>
									<div
										class="progress bg-opacity-10 bg-primary"
										role="progressbar"
										aria-label="Example with label"
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
										style="height: 5px;"
									>
										<div class="progress-bar rounded-pill" style="width: 50%; height: 5px;"></div>
									</div>
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
</div>
