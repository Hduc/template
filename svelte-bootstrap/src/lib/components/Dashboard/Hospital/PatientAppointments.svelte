<div class="col-lg-7 col-xl-8">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-3">
				<h3 class="mb-0">Patient Appointments</h3>
				<div class="position-relative">
					<input
						type="text"
						class="form-control"
						id="range_datepicker"
						style="width: 230px; height: 36px; padding-left: 35px;"
						placeholder="29/10/2024 - 28/11/2024"
					/>
					<i class="ri-calendar-line position-absolute top-50 start-0 translate-middle-y ps-3"></i>
				</div>
			</div>

			<div class="default-table-area style-two patient-table">
				<div class="table-responsive">
					<table class="table align-middle border-0">
						<thead>
							<tr class="border-bottom">
								<th scope="col" class="bg-transparent">Patient Name</th>
								<th scope="col" class="text-end bg-transparent">Date</th>
								<th scope="col" class="text-end bg-transparent">Time</th>
								<th scope="col" class="bg-transparent">Assigned</th>
								<th scope="col" class="text-end bg-transparent">Department</th>
								<th scope="col" class="text-end bg-transparent">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="fw-medium">John Doe</td>
								<td class="text-end fw-medium text-body">Sept 12, 2024</td>
								<td class="text-end fw-medium text-body">10:30 AM</td>
								<td class="fw-medium">
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/user-71.png"
											class="rounded-circle"
											style="width: 34px; height: 34px;"
											alt="user"
										/>
										<span class="ps-2 fw-medium">Dr. Sarah</span>
									</div>
								</td>
								<td class="text-end fw-medium text-body">Cardiology</td>
								<td class="text-end">
									<span
										class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
										>Confirmed</span
									>
								</td>
							</tr>
							<tr>
								<td class="fw-medium">Jane Smith</td>
								<td class="text-end fw-medium text-body">Sep 11, 2024 </td>
								<td class="text-end fw-medium text-body">11:00 AM</td>
								<td class="fw-medium">
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/user-72.png"
											class="rounded-circle"
											style="width: 34px; height: 34px;"
											alt="user"
										/>
										<span class="ps-2 fw-medium">Dr. Mark</span>
									</div>
								</td>
								<td class="text-end fw-medium text-body">Pediatrics</td>
								<td class="text-end">
									<span
										class="d-inline-block py-1 px-2 bg-danger-div bg-opacity-10 rounded-2 text-danger"
										>Rescheduled</span
									>
								</td>
							</tr>
							<tr>
								<td class="fw-medium">Robert Clark</td>
								<td class="text-end fw-medium text-body">Sep 10, 2024</td>
								<td class="text-end fw-medium text-body">1:00 PM</td>
								<td class="fw-medium">
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/user-73.png"
											class="rounded-circle"
											style="width: 34px; height: 34px;"
											alt="user"
										/>
										<span class="ps-2 fw-medium">Dr. Emily</span>
									</div>
								</td>
								<td class="text-end fw-medium text-body">Orthopedics</td>
								<td class="text-end">
									<span
										class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
										>Cancelled</span
									>
								</td>
							</tr>
							<tr>
								<td class="fw-medium">Linda Green</td>
								<td class="text-end fw-medium text-body">Sep 09, 2024</td>
								<td class="text-end fw-medium text-body">9:30 AM</td>
								<td class="fw-medium">
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/user-74.png"
											class="rounded-circle"
											style="width: 34px; height: 34px;"
											alt="user"
										/>
										<span class="ps-2 fw-medium">Dr. Adam</span>
									</div>
								</td>
								<td class="text-end fw-medium text-body">Dermatology</td>
								<td class="text-end">
									<span
										class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
										>Confirmed</span
									>
								</td>
							</tr>
							<tr>
								<td class="fw-medium">Michael White</td>
								<td class="text-end fw-medium text-body">Sep 08, 2024</td>
								<td class="text-end fw-medium text-body">2:00 PM</td>
								<td class="fw-medium">
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/user-75.png"
											class="rounded-circle"
											style="width: 34px; height: 34px;"
											alt="user"
										/>
										<span class="ps-2 fw-medium">Dr. Rebecca</span>
									</div>
								</td>
								<td class="text-end fw-medium text-body">Surgery</td>
								<td class="text-end">
									<span
										class="d-inline-block py-1 px-2 bg-primary-div bg-opacity-10 rounded-2 text-primary-div"
										>Pending</span
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div
					class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mt-4"
				>
					<span class="fs-12 fw-medium">Showing 5 of 30 Results</span>

					<nav aria-label="Page navigation example">
						<ul class="pagination mb-0 justify-content-center">
							<li class="page-item">
								<a class="page-link icon" href="/dashboard/hospital" aria-label="Previous">
									<i class="material-symbols-outlined">keyboard_arrow_left</i>
								</a>
							</li>
							<li class="page-item">
								<a class="page-link active" href="/dashboard/hospital">1</a>
							</li>
							<li class="page-item"><a class="page-link" href="/dashboard/hospital">2</a></li>
							<li class="page-item"><a class="page-link" href="/dashboard/hospital">3</a></li>
							<li class="page-item"><a class="page-link" href="/dashboard/hospital">4</a></li>
							<li class="page-item">
								<a class="page-link icon" href="/dashboard/hospital" aria-label="Next">
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
