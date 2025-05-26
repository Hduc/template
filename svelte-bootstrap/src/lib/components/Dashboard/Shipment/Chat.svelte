<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
</script>

<div class="col-md-6 col-xxl-12">
	<div class="card border-0 rounded-3 bg-white mb-4">
		<div class="card-body p-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
				<h3 class="mb-0">Chat</h3>

				<DropdownFilter />
			</div>

			<ul
				class="ps-0 mb-0 list-unstyled for-rtl-chat"
				style="height: 240px; overflow: overlay;"
				data-simplebar
			>
				<li class="mb-3">
					<div class="d-flex align-items-center mb-2">
						<div class="flex-shrink-0">
							<img
								src="/assets/images/user-62.jpg"
								class="rounded-circle"
								style="width: 40px; height: 40px;"
								alt="user"
							/>
						</div>
						<div class="flex-grow-1 ms-2">
							<h4 class="fw-medium fs-16 mb-0">Irene George</h4>
							<span class="fs-12">05:30PM</span>
						</div>
					</div>
					<p style="max-width: 310px;">Hey, have you finished the report for the project yet?</p>
				</li>
				<li class="text-end">
					<div class="d-flex align-items-center mb-3">
						<div class="flex-grow-1 me-2">
							<h4 class="fw-medium fs-16 mb-0">Virgil Martin</h4>
							<span class="fs-12">05:30PM</span>
						</div>
						<div class="flex-shrink-0">
							<img
								src="/assets/images/user-63.jpg"
								class="rounded-circle"
								style="width: 40px; height: 40px;"
								alt="user"
							/>
						</div>
					</div>
					<p class="bg-danger bg-opacity-10 p-2 rounded-2 ms-auto" style="max-width: 310px;">
						Almost! I just need to double-check some data. I’ll send it over in about an hour.
					</p>
				</li>
				<li class="mb-3">
					<div class="d-flex align-items-center mb-2">
						<div class="flex-shrink-0">
							<img
								src="/assets/images/user-64.jpg"
								class="rounded-circle"
								style="width: 40px; height: 40px;"
								alt="user"
							/>
						</div>
						<div class="flex-grow-1 ms-2">
							<h4 class="fw-medium fs-16 mb-0">Alex Dew</h4>
							<span class="fs-12">05:30PM</span>
						</div>
					</div>
					<p style="max-width: 310px;">Hey, have you finished the report for the project yet?</p>
				</li>
				<li class="text-end">
					<div class="d-flex align-items-center mb-3">
						<div class="flex-grow-1 me-2">
							<h4 class="fw-medium fs-16 mb-0">Heriy Smith</h4>
							<span class="fs-12">05:30PM</span>
						</div>
						<div class="flex-shrink-0">
							<img
								src="/assets/images/user-65.jpg"
								class="rounded-circle"
								style="width: 40px; height: 40px;"
								alt="user"
							/>
						</div>
					</div>
					<p class="bg-danger bg-opacity-10 p-2 rounded-2 ms-auto" style="max-width: 310px;">
						Almost! I just need to double-check some data. I’ll send it over in about an hour.
					</p>
				</li>
			</ul>

			<form class="position-relative z-1 mt-3 for-rtl-form">
				<input
					type="text"
					class="form-control bg-body-bg border-0"
					style="height: 35px; padding-left: 40px;"
					placeholder="Write your message..."
				/>
				<div
					class="d-flex gap-2 align-items-center position-absolute top-50 end-0 translate-middle-y pe-3 bg-body-bg"
				>
					<button class="border-0 p-0 bg-transparent" aria-label="insert">
						<i class="ri-emotion-happy-line fs-16 text-body"></i>
					</button>
					<button type="submit" class="border-0 p-0 bg-transparent" aria-label="insert">
						<i class="ri-send-plane-2-line fs-16 text-body"></i>
					</button>
				</div>
				<i class="ri-attachment-2 fs-16 position-absolute top-50 start-0 translate-middle-y ps-3"
				></i>
			</form>
		</div>
	</div>
</div>
