<script>
	import BreadCrumb from '$lib/components/Common/BreadCrumb.svelte';
	import EmailSidebar from '$lib/components/Dashboard/Apps/EmailSidebar.svelte';
	import Header from '../Header.svelte';
</script>

<svelte:head>
	<title>Trash | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<BreadCrumb page="Trash" category="APPS" parentLink="/dashboard" />

<div class="row justify-content-center">
	<EmailSidebar />

	<div class="col-xl-8 col-lg-9 col-md-8">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<div class="card-body p-4">
				<Header />

				<div class="default-table-area email-list">
					<div class="table-responsive">
						<table class="table align-middle">
							<tbody>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault2"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Google</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>2-Step Verification Turn Off <span class="text-body"
												>- Integer nec arcu ac nisi...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>20 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault3"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Facebook</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Friend Request <span class="text-body"
												>- Sed in libero eget lorem fermentum...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>21 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault4"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Linkedin</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Travel Information <span class="text-body"
												>- Vivamus vestibulum ligula in mauris...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>22 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault5"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Ethan Parker</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Leave Application <span class="text-body">- Integer nec arcu ac nisi...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>23 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault6"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Dribbble</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Design Inspiration <span class="text-body"
												>- Sed in libero eget lorem fermentum...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>24 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault7"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Instagram</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Training Schedule <span class="text-body"
												>- Vivamus vestibulum ligula in mauris...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>25 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault8"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Isabella Cooper</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Internal Auditor <span class="text-body"
												>- Sed in libero eget lorem fermentum...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>26 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault9"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Google</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Password Changed <span class="text-body">- Integer nec arcu ac nisi...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>27 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault10"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Olivia Rodriguez</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Virtual Training <span class="text-body"
												>- Vivamus vestibulum ligula in mauris...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>28 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault11"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">YouTube</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>New Subscriber <span class="text-body"
												>- Sed in libero eget lorem fermentum...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>29 JULY 2024</span>
									</td>
								</tr>
								<tr>
									<td class="ps-0">
										<div class="d-flex align-items-center">
											<div class="form-check me-4">
												<input
													class="form-check-input wh-20"
													type="checkbox"
													value=""
													id="flexCheckDefault12"
												/>
											</div>
											<button class="bg-transparent p-0 border-0">
												<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
													>restart_alt</i
												>
											</button>
										</div>
									</td>
									<td>
										<span class="fs-14 fw-medium">Google</span>
									</td>
									<td>
										<a
											href="/dashboard/apps/email/read-email"
											class="w-330 d-inline-block text-truncate text-secondary"
											>Security Alert <span class="text-body"
												>- Vivamus vestibulum ligula in mauris...</span
											></a
										>
									</td>
									<td class="text-end pe-0 fs-12">
										<span>30 JULY 2024</span>
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
