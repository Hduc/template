<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
</script>

<div
	class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4 custom-padding-30"
>
	<h3 class="mb-0 fw-semibold">Students List</h3>
	<div class="d-flex align-items-center">
		<form class="position-relative table-src-form">
			<input
				type="text"
				class="form-control border-0"
				id="SearchControl"
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
					<th scope="col" class="bg-transparent">ID</th>
					<th scope="col" class="bg-transparent">Name</th>
					<th scope="col" class="bg-transparent">Subjects</th>
					<th scope="col" class="bg-transparent">Class</th>
					<th scope="col" class="bg-transparent">Contact</th>
					<th scope="col" class="bg-transparent">Results</th>
					<th scope="col" class="bg-transparent">Status</th>
					<th scope="col" class="bg-transparent">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<span class="fs-14 fw-medium">#101</span>
					</td>
					<td>
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0">
								<img src="/assets/images/user-175.png" class="rounded-circle" alt="user" />
							</div>
							<div class="flex-grow-1 ms-2">
								<h4 class="fs-14 fw-medium mb-0">Emily Johnson</h4>
								<span class="fs-12 text-body">emily@gmail.com</span>
							</div>
						</div>
					</td>
					<td>
						<span class="fs-14 fw-medium">Math</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">5A</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">(555) 123-4567</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">89% Overall (A)</span>
					</td>
					<td>
						<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Passed</span>
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
						<span class="fs-14 fw-medium">#102</span>
					</td>
					<td>
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0">
								<img src="/assets/images/user-176.png" class="rounded-circle" alt="user" />
							</div>
							<div class="flex-grow-1 ms-2">
								<h4 class="fs-14 fw-medium mb-0">Michael Thompson</h4>
								<span class="fs-12 text-body">lmichael@gmail.com</span>
							</div>
						</div>
					</td>
					<td>
						<span class="fs-14 fw-medium">English</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">8B</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">(555) 234-5678</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">32% Overall (F)</span>
					</td>
					<td>
						<span class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal">Fail</span>
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
						<span class="fs-14 fw-medium">#103</span>
					</td>
					<td>
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0">
								<img src="/assets/images/user-177.png" class="rounded-circle" alt="user" />
							</div>
							<div class="flex-grow-1 ms-2">
								<h4 class="fs-14 fw-medium mb-0">Sarah Williams</h4>
								<span class="fs-12 text-body">sarah@gmail.com</span>
							</div>
						</div>
					</td>
					<td>
						<span class="fs-14 fw-medium">Geography</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">4C</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">(555) 345-6789</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">92% Overall (A+)</span>
					</td>
					<td>
						<span class="badge bg-primary-70 text-primary-50 p-2 fs-12 fw-normal">Dropped</span>
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
						<span class="fs-14 fw-medium">#104</span>
					</td>
					<td>
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0">
								<img src="/assets/images/user-178.png" class="rounded-circle" alt="user" />
							</div>
							<div class="flex-grow-1 ms-2">
								<h4 class="fs-14 fw-medium mb-0">David Anderson</h4>
								<span class="fs-12 text-body">david@gmail.com</span>
							</div>
						</div>
					</td>
					<td>
						<span class="fs-14 fw-medium">Physics</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">6A</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">(555) 456-7890</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">85% Overall (B+)</span>
					</td>
					<td>
						<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Passed</span>
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
						<span class="fs-14 fw-medium">#105</span>
					</td>
					<td>
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0">
								<img src="/assets/images/user-179.png" class="rounded-circle" alt="user" />
							</div>
							<div class="flex-grow-1 ms-2">
								<h4 class="fs-14 fw-medium mb-0">Jessica Martinez</h4>
								<span class="fs-12 text-body">jessica@gmail.com</span>
							</div>
						</div>
					</td>
					<td>
						<span class="fs-14 fw-medium">History</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">7B</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">(555) 567-8901</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">25% Overall (F)</span>
					</td>
					<td>
						<span class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal">Fail</span>
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
						<span class="fs-14 fw-medium">#106</span>
					</td>
					<td>
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0">
								<img src="/assets/images/user-180.png" class="rounded-circle" alt="user" />
							</div>
							<div class="flex-grow-1 ms-2">
								<h4 class="fs-14 fw-medium mb-0">James Lee</h4>
								<span class="fs-12 text-body">james@gmail.com</span>
							</div>
						</div>
					</td>
					<td>
						<span class="fs-14 fw-medium">Biology</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">5B</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">(555) 678-9012</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">88% Overall (A)</span>
					</td>
					<td>
						<span class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal">Passed</span>
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
						<span class="fs-14 fw-medium">#107</span>
					</td>
					<td>
						<div class="d-flex align-items-center">
							<div class="flex-shrink-0">
								<img src="/assets/images/user-181.png" class="rounded-circle" alt="user" />
							</div>
							<div class="flex-grow-1 ms-2">
								<h4 class="fs-14 fw-medium mb-0">Ethan Clark</h4>
								<span class="fs-12 text-body">ethan@gmail.com</span>
							</div>
						</div>
					</td>
					<td>
						<span class="fs-14 fw-medium">Music</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">8A</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">(555) 789-0123</span>
					</td>
					<td>
						<span class="fs-14 fw-medium">93% Overall (A+)</span>
					</td>
					<td>
						<span class="badge bg-primary-70 text-primary-50 p-2 fs-12 fw-normal">Dropped</span>
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
