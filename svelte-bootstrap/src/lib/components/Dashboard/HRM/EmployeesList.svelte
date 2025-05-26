<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
</script>

<div class="card-body p-0">
	<div
		class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4"
	>
		<h3 class="mb-0 fw-semibold">Employee List</h3>
		<div class="d-flex align-items-center">
			<form class="position-relative table-src-form">
				<input
					type="text"
					id="SearchControl"
					class="form-control border-0"
					style="width: 265px;"
					placeholder="Search for a name...."
				/>
				<i class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
					>search</i
				>
			</form>
			<DropdownFilter />
		</div>
	</div>

	<div class="default-table-area style-three employee-list for-data-table">
		<div class="table-responsive">
			<table class="table align-middle border-0" id="myTable">
				<thead class="border-bottom">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Employee</th>
						<th scope="col">Department</th>
						<th scope="col">Position</th>
						<th scope="col">Joining Date</th>
						<th scope="col">Salary</th>
						<th scope="col">Status</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<span class="fs-14 fw-medium">EMP001</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-156.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Olivia Turner</h4>
									<span class="fs-12 text-body">olivia@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Marketing</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Marketing Lead</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Jan 15, 2020</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$85,000</span>
						</td>
						<td>
							<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Active</span>
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
							<span class="fs-14 fw-medium">EMP002</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-157.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Liam Bennett</h4>
									<span class="fs-12 text-body">liam@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Human Resources</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">HR Manager</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Mar 10, 2021</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$75,000</span>
						</td>
						<td>
							<span class="badge bg-primary-div-60 text-primary-div-50 p-2 fs-12 fw-normal"
								>On Leave</span
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
							<span class="fs-14 fw-medium">EMP003</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-158.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Sophia Myers</h4>
									<span class="fs-12 text-body">sophia@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">IT</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Software Engineer</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Feb 22, 2019</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$95,000</span>
						</td>
						<td>
							<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Active</span>
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
							<span class="fs-14 fw-medium">EMP004</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-159.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Ethan Collins</h4>
									<span class="fs-12 text-body">ethan@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Sales</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Sales Manager</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Apr 12, 2022</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$90,000</span>
						</td>
						<td>
							<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Active</span>
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
							<span class="fs-14 fw-medium">EMP005</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-160.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Isabella Reed</h4>
									<span class="fs-12 text-body">isabella@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Finance</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Financial Analyst</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Aug 05, 2020</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$80,000</span>
						</td>
						<td>
							<span class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal">Resigned</span>
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
							<span class="fs-14 fw-medium">EMP006</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-156.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Sophia Myers</h4>
									<span class="fs-12 text-body">sophia@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">IT</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Software Engineer</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Feb 22, 2019</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$95,000</span>
						</td>
						<td>
							<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Active</span>
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
							<span class="fs-14 fw-medium">EMP007</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-157.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Isabella Reed</h4>
									<span class="fs-12 text-body">isabella@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Finance</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Financial Analyst</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Aug 05, 2020</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$80,000</span>
						</td>
						<td>
							<span class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal">Resigned</span>
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
							<span class="fs-14 fw-medium">EMP008</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-158.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Olivia Turner</h4>
									<span class="fs-12 text-body">olivia@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Marketing</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Marketing Lead</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Jan 15, 2020</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$85,000</span>
						</td>
						<td>
							<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Active</span>
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
							<span class="fs-14 fw-medium">EMP009</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-159.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Liam Bennett</h4>
									<span class="fs-12 text-body">liam@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Human Resources</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">HR Manager</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Mar 10, 2021</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$75,000</span>
						</td>
						<td>
							<span class="badge bg-primary-div-60 text-primary-div-50 p-2 fs-12 fw-normal"
								>On Leave</span
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
							<span class="fs-14 fw-medium">EMP010</span>
						</td>
						<td>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<img src="/assets/images/user-160.png" class="rounded-circle" alt="user" />
								</div>
								<div class="flex-grow-1 ms-2">
									<h4 class="fs-14 fw-medium mb-0">Ethan Collins</h4>
									<span class="fs-12 text-body">ethan@gmail.com</span>
								</div>
							</div>
						</td>
						<td>
							<span class="fs-14 fw-medium">Sales</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Sales Manager</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">Apr 12, 2022</span>
						</td>
						<td>
							<span class="fs-14 fw-medium">$90,000</span>
						</td>
						<td>
							<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Active</span>
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
	</div>
</div>
