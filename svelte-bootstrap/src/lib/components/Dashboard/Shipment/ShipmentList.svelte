<script>
	import { MoreHorizontalIcon } from 'svelte-feather-icons';
	import Dropdown from './Dropdown.svelte';
</script>

<div class="card-body p-0">
	<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 p-4">
		<h3 class="mb-0">Shipment List</h3>
		<div class="d-flex flex-wrap gap-2 gap-sm-3 align-items-center">
			<form class="position-relative table-src-form me-0">
				<input type="text" class="form-control" placeholder="Search here" />
				<i class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
					>search</i
				>
			</form>
			<select
				class="form-select month-select form-control w-135 bg-border-color border-color bg-transparent"
				aria-label="Default select example"
			>
				<option selected="">Last 30 days</option>
				<option value="1">Last 90 days</option>
				<option value="1">Last 1 year</option>
			</select>
		</div>
	</div>

	<div class="default-table-area style-two shipment-list">
		<div class="table-responsive">
			<table class="table align-middle">
				<thead>
					<tr>
						<th scope="col">
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								</div>
								<span class="ms-1">Shipment ID</span>
							</div>
						</th>
						<th scope="col">Customer Name</th>
						<th scope="col">Products</th>
						<th scope="col">Cost</th>
						<th scope="col">Ship Date</th>
						<th scope="col">Origin</th>
						<th scope="col">Shipment Method</th>
						<th scope="col">Status</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#0015</span>
							</div>
						</td>
						<td>
							<a href="my-profile.html" class="d-flex align-items-center">
								<img src="/assets/images/user-1.jpg" class="wh-30 rounded-circle" alt="user" />
								<div class="ms-2">
									<h6 class="fw-medium fs-14">David Farrior</h6>
								</div>
							</a>
						</td>
						<td>Toys</td>
						<td class="text-danger">$50,000</td>
						<td>2024-10-01</td>
						<td>New York, USA</td>
						<td>Air</td>
						<td>
							<span class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
								>Delivered</span
							>
						</td>
						<td>
							<Dropdown />
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#0099</span>
							</div>
						</td>
						<td>
							<a href="my-profile.html" class="d-flex align-items-center">
								<img src="/assets/images/user-2.jpg" class="wh-30 rounded-circle" alt="user" />
								<div class="ms-2">
									<h6 class="fw-medium fs-14">Leslie Yawn</h6>
								</div>
							</a>
						</td>
						<td>Sports</td>
						<td class="text-danger">$1,20,000</td>
						<td>2024-09-28</td>
						<td>Shanghai, China</td>
						<td>Sea</td>
						<td>
							<span class="badge bg-primary bg-opacity-10 text-primary p-2 fs-12 fw-normal"
								>In Transit</span
							>
						</td>
						<td>
							<Dropdown />
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#0145</span>
							</div>
						</td>
						<td>
							<a href="my-profile.html" class="d-flex align-items-center">
								<img src="/assets/images/user-3.jpg" class="wh-30 rounded-circle" alt="user" />
								<div class="ms-2">
									<h6 class="fw-medium fs-14">Willie Wood</h6>
								</div>
							</a>
						</td>
						<td>Fashion</td>
						<td class="text-danger">$50,000</td>
						<td>2024-09-25</td>
						<td>Berlin, Germany</td>
						<td>Road</td>
						<td>
							<span class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
								>On The Way</span
							>
						</td>
						<td>
							<Dropdown />
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#0247</span>
							</div>
						</td>
						<td>
							<a href="my-profile.html" class="d-flex align-items-center">
								<img src="/assets/images/user-4.jpg" class="wh-30 rounded-circle" alt="user" />
								<div class="ms-2">
									<h6 class="fw-medium fs-14">Jill Caldera</h6>
								</div>
							</a>
						</td>
						<td>Food</td>
						<td class="text-danger">$80,000</td>
						<td>2024-09-22</td>
						<td>Tokyo, Japan</td>
						<td>Air</td>
						<td>
							<span class="badge bg-success bg-opacity-10 text-success p-2 fs-12 fw-normal"
								>Delivered</span
							>
						</td>
						<td>
							<Dropdown />
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#0299</span>
							</div>
						</td>
						<td>
							<a href="my-profile.html" class="d-flex align-items-center">
								<img src="/assets/images/user-5.jpg" class="wh-30 rounded-circle" alt="user" />
								<div class="ms-2">
									<h6 class="fw-medium fs-14">Bill Mitchell</h6>
								</div>
							</a>
						</td>
						<td>Electronics</td>
						<td class="text-danger">$1,50,000</td>
						<td>2024-09-20</td>
						<td>Madrid, Spain</td>
						<td>Sea</td>
						<td>
							<span class="badge bg-danger bg-opacity-10 text-danger p-2 fs-12 fw-normal"
								>Pending</span
							>
						</td>
						<td>
							<Dropdown />
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div
			class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap p-4"
		>
			<span class="fs-12 fw-medium">Showing 5 of 30 Results</span>

			<nav aria-label="Page navigation example">
				<ul class="pagination mb-0 justify-content-center">
					<li class="page-item">
						<a class="page-link icon" href="/dashboard/shipment" aria-label="Previous">
							<i class="material-symbols-outlined">keyboard_arrow_left</i>
						</a>
					</li>
					<li class="page-item"><a class="page-link active" href="/dashboard/shipment">1</a></li>
					<li class="page-item"><a class="page-link" href="/dashboard/shipment">2</a></li>
					<li class="page-item"><a class="page-link" href="/dashboard/shipment">3</a></li>
					<li class="page-item"><a class="page-link" href="/dashboard/shipment">4</a></li>
					<li class="page-item">
						<a class="page-link icon" href="/dashboard/shipment" aria-label="Next">
							<i class="material-symbols-outlined">keyboard_arrow_right</i>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
