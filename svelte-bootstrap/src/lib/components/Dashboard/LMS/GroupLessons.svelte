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

<div class="col-xxl-4 col-md-6">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-0">
			<div class="p-4">
				<div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
					<h3 class="mb-0">Group Lessons</h3>
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
						<tbody>
							<tr>
								<td class="pt-1">
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0">
											<div class="d-flex">
												<a href="/dashboard/my-profile">
													<img
														src="/assets/images/user-30.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-31.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-32.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
											</div>
										</div>
										<a href="project-list.html" class="flex-grow-1 ms-2 position-relative top-2">
											<h6 class="mb-0 fs-14 fw-medium">Digital Marketing</h6>
											<span class="fs-12 text-body">15 March, 2024</span>
										</a>
									</div>
								</td>
								<td class="text-end pt-1">
									<a
										href="/dashboard/project-list"
										class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
										aria-label="View project list"
									>
										<i class="ri-arrow-right-up-line fs-18"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0">
											<div class="d-flex">
												<a href="/dashboard/my-profile">
													<img
														src="/assets/images/user-33.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-34.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-35.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
											</div>
										</div>
										<a href="project-list.html" class="flex-grow-1 ms-2 position-relative top-2">
											<h6 class="mb-0 fs-14 fw-medium">Web Development</h6>
											<span class="fs-12 text-body">10 March, 2024</span>
										</a>
									</div>
								</td>
								<td class="text-end">
									<a
										href="/dashboard/project-list"
										class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
										aria-label="View project list"
									>
										<i class="ri-arrow-right-up-line fs-18"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0">
											<div class="d-flex">
												<a href="/dashboard/my-profile">
													<img
														src="/assets/images/user-36.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-37.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-38.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
											</div>
										</div>
										<a href="project-list.html" class="flex-grow-1 ms-2 position-relative top-2">
											<h6 class="mb-0 fs-14 fw-medium">UX/UI Design</h6>
											<span class="fs-12 text-body">05 March, 2024</span>
										</a>
									</div>
								</td>
								<td class="text-end">
									<a
										href="/dashboard/project-list"
										class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
										aria-label="View project list"
									>
										<i class="ri-arrow-right-up-line fs-18"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0">
											<div class="d-flex">
												<a href="/dashboard/my-profile">
													<img
														src="/assets/images/user-39.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-40.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-41.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
											</div>
										</div>
										<a href="project-list.html" class="flex-grow-1 ms-2 position-relative top-2">
											<h6 class="mb-0 fs-14 fw-medium">Content Writer</h6>
											<span class="fs-12 text-body">02 March, 2024</span>
										</a>
									</div>
								</td>
								<td class="text-end">
									<a
										href="/dashboard/project-list"
										class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
										aria-label="View project list"
									>
										<i class="ri-arrow-right-up-line fs-18"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0">
											<div class="d-flex">
												<a href="/dashboard/my-profile">
													<img
														src="/assets/images/user-25.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-28.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
												<a href="/dashboard/my-profile" class="ms-m-20">
													<img
														src="/assets/images/user-31.jpg"
														class="wh-44 rounded-circle border border-2 border-color-white"
														alt="user"
													/>
												</a>
											</div>
										</div>
										<a href="project-list.html" class="flex-grow-1 ms-2 position-relative top-2">
											<h6 class="mb-0 fs-14 fw-medium">Wordpress</h6>
											<span class="fs-12 text-body">07 March, 2024</span>
										</a>
									</div>
								</td>
								<td class="text-end">
									<a
										href="/dashboard/project-list"
										class="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
										aria-label="View project list"
									>
										<i class="ri-arrow-right-up-line fs-18"></i>
									</a>
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
