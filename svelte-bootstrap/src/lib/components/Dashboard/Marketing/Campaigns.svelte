<script>
	let activeTab = 'all';

	import { onMount } from 'svelte';
	let activeFormTab = 0;
	let tabs = [
		'CAMPAIGN DETAILS',
		'CREATIVE UPLOADS',
		'AUDIENCES',
		'BUDGET ESTIMATES',
		'COMPLETED',
		'VIEW CAMPAIGN'
	];
	let showModal = false;

	const nextTab = () => {
		if (activeFormTab < tabs.length - 1) activeFormTab += 1;
	};

	const prevTab = () => {
		if (activeFormTab > 0) activeFormTab -= 1;
	};

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
			<h3 class="mb-0">Campaigns</h3>
			<button
				class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
				on:click={openModal}
			>
				<span class="py-sm-1 d-block">
					<i class="ri-add-line d-none d-sm-inline-block"></i>
					<span>Add Campaigns</span>
				</span>
			</button>
		</div>

		<style>
			.nav-tabs .nav-item .nav-link.active {
				color: #4936f5 !important;
			}
		</style>

		<ul
			class="nav nav-tabs bg-transparent border-bottom gap-2 gap-sm-5 pb-4"
			id="myTab"
			role="tablist"
		>
			<li class="nav-item" role="presentation">
				<button
					class={`nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body ${activeTab === 'all' ? 'active' : ''}`}
					id="all-tab"
					data-bs-toggle="tab"
					data-bs-target="#all-tab-pane"
					type="button"
					role="tab"
					aria-controls="all-tab-pane"
					on:click={() => (activeTab = 'all')}
					aria-selected="true">ALL (05)</button
				>
			</li>
			<li class="nav-item" role="presentation">
				<button
					class={`nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body ${activeTab === 'pending' ? 'active' : ''}`}
					id="pending-tab"
					data-bs-toggle="tab"
					data-bs-target="#pending-tab-pane"
					type="button"
					role="tab"
					aria-controls="pending-tab-pane"
					on:click={() => (activeTab = 'pending')}
					aria-selected="false">PENDING(05)</button
				>
			</li>
			<li class="nav-item" role="presentation">
				<button
					class={`nav-link p-0 bg-transparent border-0 fs-12 fw-medium text-body ${activeTab === 'completed' ? 'active' : ''}`}
					id="completed-tab"
					data-bs-toggle="tab"
					data-bs-target="#completed-tab-pane"
					type="button"
					role="tab"
					aria-controls="completed-tab-pane"
					on:click={() => (activeTab = 'completed')}
					aria-selected="false">COMPLETED(07)</button
				>
			</li>
		</ul>

		<div class="tab-content" id="myTabContent">
			<div
				class={`tab-pane fade ${activeTab === 'all' ? 'show active' : ''}`}
				id="all-tab-pane"
				role="tabpanel"
				aria-labelledby="all-tab"
				tabindex="0"
			>
				<div class="default-table-area style-two campaigns-table">
					<div class="table-responsive">
						<table class="table align-middle border-0">
							<tbody>
								<tr>
									<td>
										<div class="border-start border-2 border-danger ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
											<span class="fs-12">From 10 Oct - 15 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
											>Live Now</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-16.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-17.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-18.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-19.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a
													href="users-list.html"
													class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
													style="background-color: #3A4252;">+3</a
												>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-danger ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
											<span class="fs-12">From 08 Oct - 12 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
											>Reviewing</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-25.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-26.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-27.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-primary ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
											<span class="fs-12">From 01 Oct - 05 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-primary bg-opacity-10 rounded-2 text-primary"
											>Paused</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-25.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-28.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-primary-div ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
											<span class="fs-12">From 05 Oct - 17 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/google3.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
											>Live Now</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-30.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-31.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-32.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-success ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1 text-secondary">Halloween</h4>
											<span class="fs-12">From 20 Oct - 31 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
											>Reviewing</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-16.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-17.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-18.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div
				class={`tab-pane fade ${activeTab === 'pending' ? 'show active' : ''}`}
				id="pending-tab-pane"
				role="tabpanel"
				aria-labelledby="pending-tab"
				tabindex="0"
			>
				<div class="default-table-area style-two campaigns-table">
					<div class="table-responsive">
						<table class="table align-middle border-0">
							<tbody>
								<tr>
									<td>
										<div class="border-start border-2 border-primary ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
											<span class="fs-12">From 01 Oct - 05 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
											>Reviewing</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-25.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-28.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-primary-div ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
											<span class="fs-12">From 05 Oct - 17 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/google3.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
											>Reviewing</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-30.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-31.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-32.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-success ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1 text-secondary">Halloween</h4>
											<span class="fs-12">From 20 Oct - 31 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
											>Reviewing</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-16.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-17.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-18.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-danger ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
											<span class="fs-12">From 10 Oct - 15 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
											>Reviewing</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-16.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-17.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-18.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-19.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a
													href="users-list.html"
													class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
													style="background-color: #3A4252;">+3</a
												>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-danger ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
											<span class="fs-12">From 08 Oct - 12 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-success bg-opacity-10 rounded-2 text-success"
											>Reviewing</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-25.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-26.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-27.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div
				class={`tab-pane fade ${activeTab === 'completed' ? 'show active' : ''}`}
				id="completed-tab-pane"
				role="tabpanel"
				aria-labelledby="completed-tab"
				tabindex="0"
			>
				<div class="default-table-area style-two campaigns-table">
					<div class="table-responsive">
						<table class="table align-middle border-0">
							<tbody>
								<tr>
									<td>
										<div class="border-start border-2 border-danger ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
											<span class="fs-12">From 10 Oct - 15 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
											>Live Now</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-16.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-17.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-18.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-19.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a
													href="users-list.html"
													class="wh-34 lh-34 rounded-circle d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white"
													style="background-color: #3A4252;">+3</a
												>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-danger ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Teacher’s Day</h4>
											<span class="fs-12">From 08 Oct - 12 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
											>Live Now</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-25.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-26.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-27.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-primary ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">ThanksGiving</h4>
											<span class="fs-12">From 01 Oct - 05 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
											>Live Now</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-25.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-28.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-primary-div ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1">Team Gateway</h4>
											<span class="fs-12">From 05 Oct - 17 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/google3.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
											>Live Now</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-30.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-31.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-32.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
								<tr>
									<td>
										<div class="border-start border-2 border-success ps-3 py-2">
											<h4 class="fs-14 fw-semibold mb-1 text-secondary">Halloween</h4>
											<span class="fs-12">From 20 Oct - 31 Oct, 24</span>
										</div>
									</td>
									<td>
										<div class="d-flex gap-3 gap-xl-2 gap-xxl-3 flex-wrap">
											<img src="/assets/images/facebook4.svg" alt="facebook" />
											<img src="/assets/images/instagram2.svg" alt="instagram" />
											<img src="/assets/images/google3.svg" alt="facebook" />
											<img src="/assets/images/linkedin2.svg" alt="facebook" />
										</div>
									</td>
									<td>
										<span
											class="d-inline-block py-1 px-2 bg-danger bg-opacity-10 rounded-2 text-danger"
											>Live Now</span
										>
									</td>
									<td>
										<ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
											<li>
												<a href="my-profile.html">
													<img
														src="/assets/images/user-16.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-17.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
											<li class="ms-m-15">
												<a href="my-profile.html">
													<img
														src="/assets/images/user-18.jpg"
														class="wh-34 lh-34 rounded-circle border border-1 border-color-white"
														alt="user"
													/>
												</a>
											</li>
										</ul>
									</td>
									<td>
										<a
											href="/dashboard/nft-details"
											class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
											style="background-color: #ECEEF2; width: 30px; height: 30px; line-height: 30px;"
											aria-label="View"
										>
											<i class="ri-arrow-right-line"></i>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
{#if showModal}
	<div class="modal fade show" style="display: block;">
		<div class="modal-dialog modal-fullscreen w-100 p-lg-5">
			<div class="modal-content">
				<div class="modal-header border-0 p-4 p-md-5 pb-0">
					<h1 class="modal-title fs-24" id="exampleModalLabel">Create Campaigns</h1>
					<button
						type="button"
						class="btn-close campaigns-close"
						data-bs-dismiss="modal"
						aria-label="Close"
						on:click={closeModal}
					></button>
				</div>
				<div class="modal-body p-4 p-md-5">
					<ul
						class="tabs create-campaigns-tabs d-flex flex-wrap justify-content-between gap-2 list-unstyled pb-0"
					>
						{#each tabs as tab, index}
							<li class="tab {index === activeFormTab ? 'active' : ''}">
								<button
									class="nav-link fs-12 fw-medium text-secondary border-0"
									on:click={() => (activeFormTab = index)}
								>
									{tab}
								</button>
							</li>
						{/each}
					</ul>
					<div class="tab-content-wrap">
						{#if activeFormTab === 0}
							<div class={`tab-contents active back-none active`}>
								<form class="campaign-stepper-content m-auto" style="max-width: 625px;">
									<h3 class="fs-18 mb-3 mb-md-5">Campaign Details</h3>

									<div class="mb-5">
										<label class="fw-semibold mb-2"
											>Campaign Name <span class="text-danger">*</span></label
										>
										<input
											type="text"
											class="form-control bg-border-color h-55 fs-16"
											placeholder="Christmas Eve"
										/>
									</div>
									<div class="mb-5">
										<label class="fw-semibold mb-2"
											>Company Logo <span class="text-danger">*</span></label
										>
										<div class="avatar-upload">
											<div class="avatar-edit">
												<input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
												<label for="imageUpload"></label>
											</div>
											<div class="avatar-preview">
												<div
													id="imagePreview"
													style="background-image: url(https://angular.envytheme.com/trezo-mt/images/admin.png);"
												></div>
											</div>
										</div>
										<span class="fs-14 d-block mt-4"
											>Allowed file types: png, jpg, jpeg. Max size: 1 MB</span
										>
									</div>
									<div class="mb-5">
										<label class="fw-semibold mb-2"
											>Campaign Goal <span class="text-danger">*</span></label
										>

										<label for="radio5" class="custom-radio style-two mb-3 pb-3 border-bottom">
											<input
												checked
												type="radio"
												class="form-check-input"
												name="radio"
												id="radio5"
											/>
											<div class="radio-content">
												<span class="fw-medium text-secondary mb-1 d-block">Get more visitors</span>
												<p>Increase impression traffic onto the platform</p>
											</div>
										</label>
										<label for="radio6" class="custom-radio style-two mb-3 pb-3 border-bottom">
											<input type="radio" class="form-check-input" name="radio" id="radio6" />
											<div class="radio-content">
												<span class="fw-medium text-secondary mb-1 d-block"
													>Get more messages on chat</span
												>
												<p>Increase community interaction and communication</p>
											</div>
										</label>
										<label for="radio7" class="custom-radio style-two mb-3 pb-3 border-bottom">
											<input type="radio" class="form-check-input" name="radio" id="radio7" />
											<div class="radio-content">
												<span class="fw-medium text-secondary mb-1 d-block">Get more calls</span>
												<p>
													Boost telecommunication feedback to provide precise and accurate
													information
												</p>
											</div>
										</label>
										<label for="radio8" class="custom-radio style-two mb-3 pb-3 border-bottom">
											<input type="radio" class="form-check-input" name="radio" id="radio8" />
											<div class="radio-content">
												<span class="fw-medium text-secondary mb-1 d-block">Get more likes</span>
												<p>Increase positive interactivity on social media platforms</p>
											</div>
										</label>
										<label for="radio9" class="custom-radio style-two mb-3 pb-3 border-bottom">
											<input type="radio" class="form-check-input" name="radio" id="radio9" />
											<div class="radio-content">
												<span class="fw-medium text-secondary mb-1 d-block">Lead generation</span>
												<p>Collect contact information for potential customers</p>
											</div>
										</label>
									</div>
								</form>
							</div>
						{:else if activeFormTab === 1}
							<div class={`tab-contents active`}>
								<form class="campaign-stepper-content m-auto" style="max-width: 625px;">
									<h3 class="fs-18 mb-4">Upload Files</h3>

									<div class="mb-5 only-file-upload">
										<div
											class="d-flex align-items-center position-relative z-1 bg-border-color p-4 rounded-2"
											style="border: 2px dashed #5DA8FF;"
										>
											<div class="flex-shrink-0">
												<img src="/assets/images/upload.png" alt="upload" />
											</div>
											<div class="flex-grow-1 ms-3">
												<h4 class="fs-16">Drop campaign files here or click to upload.</h4>
												<p>Upload upto 12 files, max size each file: 5MB.</p>
											</div>
											<label
												class="position-absolute top-0 bottom-0 start-0 end-0 cursor"
												id="upload-container"
											>
												<input
													class="form__file bottom-0"
													id="upload-files"
													type="file"
													multiple="multiple"
												/>
											</label>
										</div>
										<div id="files-list-container"></div>
									</div>

									<h3 class="fs-18 mb-4">Uploaded Files</h3>

									<div class="mb-5">
										<div
											class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
										>
											<div class="d-flex align-items-center">
												<div class="flex-shrink-0">
													<img src="/assets/images/pdf.png" style="width: 35px;" alt="pdf" />
												</div>
												<div class="flex-grow-1 ms-3">
													<h4 class="fs-16 mb-0">Campaign Requirements</h4>
													<p>Increase impression traffic onto the platform</p>
												</div>
											</div>

											<div class="dropdown action-opt">
												<button
													class="btn p-2 bg-border-color"
													type="button"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<span>Edit</span>
													<i data-feather="chevron-down"></i>
												</button>
												<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="edit"></i>
															Edit
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="eye"></i>
															View
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="trash"></i>
															Delete
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div
											class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
										>
											<div class="d-flex align-items-center">
												<div class="flex-shrink-0">
													<img src="/assets/images/doc.png" style="width: 35px;" alt="doc" />
												</div>
												<div class="flex-grow-1 ms-3">
													<h4 class="fs-16 mb-0">Campaign’s mission and vision</h4>
													<p>Increase impression traffic onto the platform</p>
												</div>
											</div>

											<div class="dropdown action-opt">
												<button
													class="btn p-2 bg-border-color"
													type="button"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<span>Edit</span>
													<i data-feather="chevron-down"></i>
												</button>
												<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="edit"></i>
															Edit
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="eye"></i>
															View
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="trash"></i>
															Delete
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div
											class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
										>
											<div class="d-flex align-items-center">
												<div class="flex-shrink-0">
													<img src="/assets/images/xl4.png" style="width: 35px;" alt="xl4" />
												</div>
												<div class="flex-grow-1 ms-3">
													<h4 class="fs-16 mb-0">Campaign Banner</h4>
													<p>Increase impression traffic onto the platform</p>
												</div>
											</div>

											<div class="dropdown action-opt">
												<button
													class="btn p-2 bg-border-color"
													type="button"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<span>Edit</span>
													<i data-feather="chevron-down"></i>
												</button>
												<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="edit"></i>
															Edit
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="eye"></i>
															View
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="trash"></i>
															Delete
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div
											class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
										>
											<div class="d-flex align-items-center">
												<div class="flex-shrink-0">
													<img src="/assets/images/jpg.png" style="width: 35px;" alt="pdf" />
												</div>
												<div class="flex-grow-1 ms-3">
													<h4 class="fs-16 mb-0">Campaign Image</h4>
													<p>Increase impression traffic onto the platform</p>
												</div>
											</div>

											<div class="dropdown action-opt">
												<button
													class="btn p-2 bg-border-color"
													type="button"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<span>Edit</span>
													<i data-feather="chevron-down"></i>
												</button>
												<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="edit"></i>
															Edit
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="eye"></i>
															View
														</a>
													</li>
													<li>
														<a class="dropdown-item" href="javascript:;">
															<i data-feather="trash"></i>
															Delete
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</form>
							</div>
						{:else if activeFormTab === 2}
							<div class="tab-contents active">
								<div class="campaign-stepper-content m-auto" style="max-width: 625px;">
									<h3 class="fs-18 mb-4">Configure Audiences</h3>

									<div class="mb-5">
										<label class="fw-semibold mb-3">Gender</label>
										<div class="row">
											<div class="col-sm-4 mb-3 mb-sm-0">
												<label for="radio" class="custom-radio">
													<input
														checked
														type="radio"
														class="form-check-input"
														name="radio"
														id="radio"
													/>
													<div class="radio-content">
														<span class="fw-medium text-secondary">All</span>
													</div>
												</label>
											</div>
											<div class="col-sm-4 mb-3 mb-sm-0">
												<label for="radio2" class="custom-radio">
													<input type="radio" class="form-check-input" name="radio" id="radio2" />
													<div class="radio-content">
														<span class="fw-medium text-secondary">Male</span>
													</div>
												</label>
											</div>
											<div class="col-sm-4">
												<label for="radio3" class="custom-radio">
													<input type="radio" class="form-check-input" name="radio" id="radio3" />
													<div class="radio-content">
														<span class="fw-medium text-secondary">Female</span>
													</div>
												</label>
											</div>
										</div>
									</div>

									<div class="mb-5">
										<label class="fw-semibold mb-3">Age</label>
										<input type="text" class="single-slider" name="age" value="" data-from="40" />
									</div>

									<div class="mb-5">
										<label class="fw-semibold mb-3">Location</label>
										<div class="form-group mb-4">
											<div
												class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
												id="tagContainer"
												style="border: 2px dashed #5DA8FF;"
											>
												<input
													type="text"
													id="tagInput"
													class="form-control h-60 border-0 bg-border-color"
													placeholder="Type and press Enter"
												/>
											</div>
										</div>
									</div>

									<div class="mb-5">
										<label class="fw-semibold mb-3">Media</label>
										<div class="form-group mb-4">
											<div
												class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
												id="MediaContainer"
												style="border: 2px dashed #5DA8FF;"
											>
												<input
													type="text"
													id="MediaInput"
													class="form-control h-60 border-0 bg-border-color"
													placeholder="Type and press Enter"
												/>
											</div>
										</div>
									</div>

									<div class="mb-5">
										<label class="fw-semibold mb-3">Add Team Member</label>
										<div class="form-group mb-4">
											<div
												class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
												id="AddTeamMemberContainer"
												style="border: 2px dashed #5DA8FF;"
											>
												<input
													type="text"
													id="AddTeamMemberInput"
													class="form-control h-60 border-0 bg-border-color"
													placeholder="Type and press Enter"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						{:else if activeFormTab === 3}
							<div class="tab-contents active">
								<form class="campaign-stepper-content m-auto" style="max-width: 625px;">
									<h3 class="fs-18 mb-4">Budget Estimates</h3>

									<div class="mb-5">
										<label class="fw-semibold mb-3">Budgets Estimates</label>
										<div class="row">
											<div class="col-sm-6 mb-3 mb-sm-0">
												<label for="radio4" class="custom-radio">
													<input
														checked
														type="radio"
														class="form-check-input"
														name="radio"
														id="radio4"
													/>
													<div class="radio-content">
														<span class="fw-medium text-secondary mb-1 d-block"
															>Continuous Duration</span
														>
														<p>Your Ad will run continuously for a daily budget.</p>
													</div>
												</label>
											</div>
											<div class="col-sm-6">
												<label for="radio10" class="custom-radio">
													<input type="radio" class="form-check-input" name="radio" id="radio10" />
													<div class="radio-content">
														<span class="fw-medium text-secondary mb-1 d-block">Fixed Duration</span
														>
														<p>Your Ad will run only specified dates only.</p>
													</div>
												</label>
											</div>
										</div>
									</div>

									<div class="mb-5">
										<label class="fw-semibold mb-3">Daily Budget</label>
										<input type="text" class="slider" name="cash_end" value="" data-from="1000" />
									</div>
								</form>
							</div>
						{:else if activeFormTab === 4}
							<div class="tab-contents active">
								<div
									class="campaign-stepper-content m-auto text-center mb-5"
									style="max-width: 625px;"
								>
									<div class="mb-4">
										<img src="/assets/images/interface-welcome.png" alt="interface-welcome" />
									</div>

									<h3 class="fs-24 mb-3">Campaign Completed!</h3>
									<p class="mx-auto mb-4" style="max-width: 463px;">
										You will receive an email with with the summary of your newly created campaign!
									</p>

									<div class="d-flex flex-wrap justify-content-center gap-2 gap-sm-4">
										<button class="btn btn-secondary"
											>Create New Campaign <i class="ri-arrow-right-line text-white"></i></button
										>
										<button class="btn btn-primary"
											>View Campaign <i class="ri-arrow-right-line text-white"></i></button
										>
									</div>
								</div>
							</div>
						{:else if activeFormTab === 5}
							<div class="tab-contents continue-none active">
								<div class="campaign-stepper-content">
									<div class="d-flex align-items-center mb-4 mb-md-5">
										<div class="flex-shrink-0">
											<img src="/assets/images/christmas.png" alt="christmas" />
										</div>
										<div class="flex-grow-1 ms-3">
											<h3 class="fs-24">Christmas Eve</h3>
											<span class="fs-16 fw-medium">From 10 Oct - 15 Oct, 24</span>
										</div>
									</div>

									<div class="row">
										<div class="col-lg-4">
											<div class="card border p-4 bg-border-color rounded-3 mb-4">
												<div
													class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
												>
													<h4 class="fs-18 mb-0">Campaign Goal:</h4>

													<div class="dropdown action-opt">
														<button
															class="btn bg-transparent p-0"
															type="button"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															<i data-feather="more-horizontal"></i>
														</button>
														<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="clock"></i>
																	Today
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="eye"></i>
																	View
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="trash"></i>
																	Delete
																</a>
															</li>
														</ul>
													</div>
												</div>
												<h4 class="fw-medium fs-14">Get more visitors</h4>
												<p>Increase impression traffic onto the platform</p>
											</div>
											<div class="card border p-4 bg-border-color rounded-3 mb-4">
												<div
													class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
												>
													<h4 class="fs-18 mb-0">Team Members:</h4>

													<div class="dropdown action-opt">
														<button
															class="btn bg-transparent p-0"
															type="button"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															<i data-feather="more-horizontal"></i>
														</button>
														<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="clock"></i>
																	Today
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="eye"></i>
																	View
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="trash"></i>
																	Delete
																</a>
															</li>
														</ul>
													</div>
												</div>
												<ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
													<li>
														<button
															class="border-0 p-2 bg-body-bg d-flex align-items-center rounded-2"
														>
															<img
																src="/assets/images/user-90.png"
																class="border border-white rounded-circle"
																alt="user"
															/>
															<span class="fw-medium ms-2 text-secondary">Jonathon Ronan</span>
														</button>
													</li>
													<li>
														<button
															class="border-0 p-2 bg-body-bg d-flex align-items-center rounded-2"
														>
															<img
																src="/assets/images/user-91.png"
																class="border border-white rounded-circle"
																alt="user"
															/>
															<span class="fw-medium ms-2 text-secondary">Walter White</span>
														</button>
													</li>
												</ul>
											</div>
										</div>
										<div class="col-lg-4">
											<div class="card border p-4 bg-border-color rounded-3 mb-4">
												<div
													class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
												>
													<h4 class="fs-18 mb-0">Audiences</h4>

													<div class="dropdown action-opt">
														<button
															class="btn bg-transparent p-0"
															type="button"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															<i data-feather="more-horizontal"></i>
														</button>
														<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="clock"></i>
																	Today
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="eye"></i>
																	View
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="trash"></i>
																	Delete
																</a>
															</li>
														</ul>
													</div>
												</div>

												<ul class="ps-0 mb-0 list-unstyled">
													<li class="border-bottom pb-2 mb-2 border-body-bg">
														<span class="text-secondary fw-medium">Gender:</span> All
													</li>
													<li class="border-bottom pb-2 mb-2 border-body-bg">
														<span class="text-secondary fw-medium">Age Range:</span> 18-60
													</li>
													<li class="border-bottom pb-2 mb-2 border-body-bg">
														<span class="text-secondary fw-medium">Location:</span> Canada, USA
													</li>
													<li>
														<span class="text-secondary fw-medium">Media:</span>Facebook, Instagram
													</li>
												</ul>
											</div>
										</div>
										<div class="col-lg-4">
											<div class="card border p-4 bg-border-color rounded-3 mb-4">
												<div
													class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
												>
													<h4 class="fs-18 mb-0">Uploaded Files</h4>

													<div class="dropdown action-opt">
														<button
															class="btn bg-transparent p-0"
															type="button"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															<i data-feather="more-horizontal"></i>
														</button>
														<ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="clock"></i>
																	Today
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="eye"></i>
																	View
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="javascript:;">
																	<i data-feather="trash"></i>
																	Delete
																</a>
															</li>
														</ul>
													</div>
												</div>

												<div
													class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
												>
													<div class="d-flex align-items-center">
														<div class="flex-shrink-0">
															<img src="/assets/images/pdf.png" style="width: 35px;" alt="pdf" />
														</div>
														<div class="flex-grow-1 ms-3">
															<h4 class="fs-16 mb-0">Campaign Requirements</h4>
															<p>Increase impression traffic onto the platform</p>
														</div>
													</div>

													<button
														class="bg-white rounded-circle border-0"
														style="width: 30px; height: 30px;"
													>
														<i class="ri-download-2-line text-primary fs-16"></i>
													</button>
												</div>
												<div
													class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
												>
													<div class="d-flex align-items-center">
														<div class="flex-shrink-0">
															<img src="/assets/images/doc.png" style="width: 35px;" alt="doc" />
														</div>
														<div class="flex-grow-1 ms-3">
															<h4 class="fs-16 mb-0">Campaign’s mission and vision</h4>
															<p>Increase impression traffic onto the platform</p>
														</div>
													</div>

													<button
														class="bg-white rounded-circle border-0"
														style="width: 30px; height: 30px;"
													>
														<i class="ri-download-2-line text-primary fs-16"></i>
													</button>
												</div>
												<div
													class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
												>
													<div class="d-flex align-items-center">
														<div class="flex-shrink-0">
															<img src="/assets/images/xl4.png" style="width: 35px;" alt="xl4" />
														</div>
														<div class="flex-grow-1 ms-3">
															<h4 class="fs-16 mb-0">Campaign Banner</h4>
															<p>Increase impression traffic onto the platform</p>
														</div>
													</div>

													<button
														class="bg-white rounded-circle border-0"
														style="width: 30px; height: 30px;"
													>
														<i class="ri-download-2-line text-primary fs-16"></i>
													</button>
												</div>
												<div
													class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
												>
													<div class="d-flex align-items-center">
														<div class="flex-shrink-0">
															<img src="/assets/images/jpg.png" style="width: 35px;" alt="pdf" />
														</div>
														<div class="flex-grow-1 ms-3">
															<h4 class="fs-16 mb-0">Campaign Image</h4>
															<p>Increase impression traffic onto the platform</p>
														</div>
													</div>

													<button
														class="bg-white rounded-circle border-0"
														style="width: 30px; height: 30px;"
													>
														<i class="ri-download-2-line text-primary fs-16"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						{/if}
						<!-- Navigation buttons -->
						<div class="buttons d-flex justify-content-between m-auto" style="max-width: 625px;">
							<button on:click={prevTab} id="prevButton" class="btn btn-secondary"
								><i class="ri-arrow-left-line text-white"></i> Back</button
							>
							<button on:click={nextTab} id="nextButton" class="btn btn-primary"
								>Continue <i class="ri-arrow-right-line text-white"></i></button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
