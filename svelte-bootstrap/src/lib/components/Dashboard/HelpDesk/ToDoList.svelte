<script>
	import CreateTaskForm from '../ProjectManagement/CreateTaskForm.svelte';

	let showOffcanvas = false;

	function openOffcanvas() {
		showOffcanvas = true;
	}

	function closeOffcanvas() {
		showOffcanvas = false;
	}
</script>

<div class="col-lg-8">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-0">
			<div class="p-4">
				<div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
					<h3 class="mb-0">To Do List</h3>
					<form class="position-relative table-src-form me-0">
						<input type="text" class="form-control" placeholder="Search here" />
						<i class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
							>search</i
						>
					</form>
				</div>
			</div>

			<div class="default-table-area style-two to-do-list padding-style">
				<div class="table-responsive">
					<table class="table align-middle">
						<thead>
							<tr>
								<th scope="col">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckDefault7"
										/>
										<label class="position-relative top-2 ms-1" for="flexCheckDefault7">ID</label>
									</div>
								</th>
								<th scope="col">Task Title</th>
								<th scope="col">Assigned To</th>
								<th scope="col">Due Date</th>
								<th scope="col">Priority</th>
								<th scope="col">Status</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="text-body">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckDefault12"
										/>
										<label class="position-relative top-2 ms-1" for="flexCheckDefault12">#854</label
										>
									</div>
								</td>
								<td>
									<a href="/dashboard/project-overview" class="text-body">Network Infrastructure</a>
								</td>
								<td>Oliver Clark</td>
								<td class="text-body">30 Apr 2024</td>
								<td class="text-body">High</td>
								<td>
									<span class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
										>Finished</span
									>
								</td>
								<td>
									<div class="d-flex align-items-center gap-1">
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-primary">visibility</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-body">edit</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-danger">delete</i>
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td class="text-body">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckDefault8"
										/>
										<label class="position-relative top-2 ms-1" for="flexCheckDefault8">#853</label>
									</div>
								</td>
								<td>
									<a href="/dashboard/project-overview" class="text-body">Cloud Migration</a>
								</td>
								<td>Ethan Baker</td>
								<td class="text-body">25 Apr 2024</td>
								<td class="text-body">Low</td>
								<td>
									<span class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
										>Pending</span
									>
								</td>
								<td>
									<div class="d-flex align-items-center gap-1">
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-primary">visibility</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-body">edit</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-danger">delete</i>
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td class="text-body">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckDefault9"
										/>
										<label class="position-relative top-2 ms-1" for="flexCheckDefault9">#852</label>
									</div>
								</td>
								<td>
									<a href="/dashboard/project-overview" class="text-body">Website Revamp</a>
								</td>
								<td>Sophia Carter</td>
								<td class="text-body">20 Apr 2024</td>
								<td class="text-body">Medium</td>
								<td>
									<span
										class="badge bg-primary-div bg-opacity-10 text-primary-div p-2 fs-12 fw-normal"
										>In Progress</span
									>
								</td>
								<td>
									<div class="d-flex align-items-center gap-1">
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-primary">visibility</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-body">edit</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-danger">delete</i>
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td class="text-body">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckDefault10"
										/>
										<label class="position-relative top-2 ms-1" for="flexCheckDefault10">#851</label
										>
									</div>
								</td>
								<td>
									<a href="/dashboard/project-overview" class="text-body">Mobile Application</a>
								</td>
								<td>Ava Cooper</td>
								<td class="text-body">15 Apr 2024</td>
								<td class="text-body">High</td>
								<td>
									<span class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
										>Finished</span
									>
								</td>
								<td>
									<div class="d-flex align-items-center gap-1">
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-primary">visibility</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-body">edit</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-danger">delete</i>
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td class="text-body">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="flexCheckDefault11"
										/>
										<label class="position-relative top-2 ms-1" for="flexCheckDefault11">#850</label
										>
									</div>
								</td>
								<td>
									<a href="/dashboard/project-overview" class="text-body">System Deployment</a>
								</td>
								<td>Isabella Evans</td>
								<td class="text-body">10 Apr 2024</td>
								<td class="text-body">Low</td>
								<td>
									<span class="badge bg-danger bg-opacity-25 text-danger p-2 fs-12 fw-normal"
										>Cancelled</span
									>
								</td>
								<td>
									<div class="d-flex align-items-center gap-1">
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-primary">visibility</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-body">edit</i>
										</button>
										<button class="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
											<i class="material-symbols-outlined fs-16 text-danger">delete</i>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="p-4 text-end">
					<button
						class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasRight"
						aria-controls="offcanvasRight"
						on:click={openOffcanvas}
					>
						<span class="py-sm-1 d-block">
							<i class="ri-add-line"></i>
							<span>Add New Task</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<div
	class="offcanvas offcanvas-end {showOffcanvas ? 'show' : ''}"
	tabindex="-1"
	id="offcanvasRight"
	aria-labelledby="offcanvasRightLabel"
	style:visibility={showOffcanvas ? 'visible' : 'hidden'}
>
	<div class="offcanvas-header border-bottom p-4">
		<h5 class="offcanvas-title fs-18 mb-0" id="offcanvasRightLabel">Create Task</h5>
		<button type="button" class="btn-close" on:click={closeOffcanvas} aria-label="Close"></button>
	</div>
	<div class="offcanvas-body p-4">
		<CreateTaskForm on:closeForm={closeOffcanvas} />
	</div>
</div>
