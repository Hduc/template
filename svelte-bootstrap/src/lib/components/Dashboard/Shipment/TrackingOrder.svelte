<div class="card-body p-0">
	<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 p-4">
		<h3 class="mb-0">Tracking Order</h3>
		<select
			class="form-select month-select form-control w-135 bg-border-color border-color bg-transparent"
			aria-label="Default select example"
		>
			<option selected="">Last 30 days</option>
			<option value="1">Last 90 days</option>
			<option value="1">Last 1 year</option>
		</select>
	</div>

	<div class="default-table-area style-two transaction-history tracking-order">
		<div class="table-responsive">
			<table class="table align-middle">
				<thead>
					<tr>
						<th scope="col">
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								</div>
								<span class="ms-1">Order ID</span>
							</div>
						</th>
						<th scope="col">Customer Name</th>
						<th scope="col">Order Date</th>
						<th scope="col">Current Location</th>
						<th scope="col">Tracking Number</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#OR045</span>
							</div>
						</td>
						<td>Mark Blake</td>
						<td>2024-09-05</td>
						<td>Chicago, IL</td>
						<td>TRK001</td>
						<td>
							<span
								class="d-inline-block fs-12 bg-success bg-opacity-10 text-success px-2 py-1 rounded-1"
								>Delivered</span
							>
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#OR085</span>
							</div>
						</td>
						<td>Cheryl Myers</td>
						<td>2024-09-06</td>
						<td>London, UK</td>
						<td>TRK002</td>
						<td>
							<span
								class="d-inline-block fs-12 bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-1"
								>In Transit</span
							>
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#OR099</span>
							</div>
						</td>
						<td>Marc Bradley</td>
						<td>2024-09-10</td>
						<td>Paris, France</td>
						<td>TRK003</td>
						<td>
							<span
								class="d-inline-block fs-12 bg-danger bg-opacity-10 text-danger px-2 py-1 rounded-1"
								>On The Way</span
							>
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#OR125</span>
							</div>
						</td>
						<td>Ryan Vasquez</td>
						<td>N/A</td>
						<td>N/A</td>
						<td>N/A</td>
						<td>
							<span
								class="d-inline-block fs-12 bg-danger bg-opacity-25 text-danger px-2 py-1 rounded-1"
								>Canceled</span
							>
						</td>
					</tr>
					<tr>
						<td>
							<div class="d-flex align-items-center">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
								</div>
								<span class="ms-1 text-secondary">#OR245</span>
							</div>
						</td>
						<td>Donald Ness</td>
						<td>2024-09-12</td>
						<td>Tokyo, Japan</td>
						<td>TRK004</td>
						<td>
							<span
								class="d-inline-block fs-12 bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-1"
								>Pending</span
							>
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
