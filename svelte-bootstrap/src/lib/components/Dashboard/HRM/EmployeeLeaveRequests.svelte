<script>
	import DropDownMonth from '$lib/components/Common/DropDownMonth.svelte';
</script>

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-0">
		<div
			class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4"
		>
			<h3 class="mb-0 fw-semibold">Employee Leave Requests</h3>
			<DropDownMonth />
		</div>

		<div class="default-table-area style-three employee-leave-request">
			<div class="table-responsive">
				<table class="table align-middle border-0">
					<thead class="border-bottom">
						<tr>
							<th scope="col" class="bg-transparent fw-normal">Employee</th>
							<th scope="col" class="bg-transparent fw-normal">Leave Type</th>
							<th scope="col" class="bg-transparent fw-normal">Days</th>
							<th scope="col" class="bg-transparent fw-normal">Status</th>
							<th scope="col" class="bg-transparent fw-normal">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-151.png" class="rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2">
										<h4 class="fs-14 fw-medium mb-0">John Doe</h4>
										<span class="fs-12 text-body">Marketing</span>
									</div>
								</div>
							</td>
							<td class="fs-14 fw-medium">Vacation</td>
							<td class="fs-14 fw-medium">3</td>
							<td>
								<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Approved</span
								>
							</td>
							<td>
								<div class="d-flex align-items-center gap-2">
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary">visibility</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary-div-50">border_color</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-danger">delete</i>
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-152.png" class="rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2">
										<h4 class="fs-14 fw-medium mb-0">Jane Smith</h4>
										<span class="fs-12 text-body">HR</span>
									</div>
								</div>
							</td>
							<td class="fs-14 fw-medium">Sick Leave</td>
							<td class="fs-14 fw-medium">2</td>
							<td>
								<span class="badge bg-primary-div-60 text-primary-div-50 p-2 fs-12 fw-normal"
									>Pending</span
								>
							</td>
							<td>
								<div class="d-flex align-items-center gap-2">
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary">visibility</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary-div-50">border_color</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-danger">delete</i>
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-153.png" class="rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2">
										<h4 class="fs-14 fw-medium mb-0">Alex Johnson</h4>
										<span class="fs-12 text-body">Developer</span>
									</div>
								</div>
							</td>
							<td class="fs-14 fw-medium">Maternity Leave</td>
							<td class="fs-14 fw-medium">4</td>
							<td>
								<span class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal">Rejected</span>
							</td>
							<td>
								<div class="d-flex align-items-center gap-2">
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary">visibility</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary-div-50">border_color</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-danger">delete</i>
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-154.png" class="rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2">
										<h4 class="fs-14 fw-medium mb-0">Emily Davis</h4>
										<span class="fs-12 text-body">UX Designer</span>
									</div>
								</div>
							</td>
							<td class="fs-14 fw-medium">Vacation</td>
							<td class="fs-14 fw-medium">2</td>
							<td>
								<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Approved</span
								>
							</td>
							<td>
								<div class="d-flex align-items-center gap-2">
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary">visibility</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary-div-50">border_color</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-danger">delete</i>
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src="/assets/images/user-155.png" class="rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2">
										<h4 class="fs-14 fw-medium mb-0">Michael Brown</h4>
										<span class="fs-12 text-body">Finance</span>
									</div>
								</div>
							</td>
							<td class="fs-14 fw-medium">Personal Leave</td>
							<td class="fs-14 fw-medium">1</td>
							<td>
								<span class="badge bg-primary-div-60 text-primary-div-50 p-2 fs-12 fw-normal"
									>Pending</span
								>
							</td>
							<td>
								<div class="d-flex align-items-center gap-2">
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary">visibility</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-primary-div-50">border_color</i>
									</button>
									<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
										<i class="material-symbols-outlined fs-18 text-danger">delete</i>
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div
				class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 custom-padding-30"
			>
				<span class="fs-12 fw-medium">Showing 5 of 30 Results</span>

				<nav aria-label="Page navigation example">
					<ul class="pagination mb-0 justify-content-center">
						<li class="page-item">
							<a class="page-link icon" href="/dashboard/hrm" aria-label="Previous">
								<i class="material-symbols-outlined">keyboard_arrow_left</i>
							</a>
						</li>
						<li class="page-item"><a class="page-link active" href="/dashboard/hrm">1</a></li>
						<li class="page-item"><a class="page-link" href="/dashboard/hrm">2</a></li>
						<li class="page-item"><a class="page-link" href="/dashboard/hrm">3</a></li>
						<li class="page-item"><a class="page-link" href="/dashboard/hrm">4</a></li>
						<li class="page-item">
							<a class="page-link icon" href="/dashboard/hrm" aria-label="Next">
								<i class="material-symbols-outlined">keyboard_arrow_right</i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
