<svelte:head>
	<title>Reset Password | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="container">
	<div class="main-content d-flex flex-column p-0">
		<div class="m-auto m-1230">
			<div class="row align-items-center">
				<div class="col-lg-6 d-none d-lg-block">
					<img src="/assets/images/reset.jpg" class="rounded-3" alt="reset" />
				</div>
				<div class="col-lg-6">
					<div class="mw-480 ms-lg-auto">
						<div class="d-inline-block mb-4">
							<img src="/assets/images/logo.svg" class="rounded-3 for-light-logo" alt="login" />
							<img
								src="/assets/images/white-logo.svg"
								class="rounded-3 for-dark-logo"
								alt="login"
							/>
						</div>
						<h3 class="fs-28 mb-2">Reset Password?</h3>
						<p class="fw-medium fs-16 mb-4">
							Enter your new password and confirm it another time in the field below.
						</p>
						<form>
							<div class="form-group mb-3">
								<label for="old-password" class="label text-secondary">Old Password</label>
								<input
									id="old-password"
									type="password"
									class="form-control"
									placeholder="Type your old password"
								/>
							</div>
							<div class="form-group mb-3">
								<label for="new-password" class="label text-secondary">New Password</label>
								<input
									id="new-password"
									type="password"
									class="form-control"
									placeholder="Type your new password"
								/>
							</div>
							<div class="form-group mb-3">
								<label for="confirm-password" class="label text-secondary">Confirm Password</label>
								<input
									id="confirm-password"
									type="password"
									class="form-control"
									placeholder="Type your confirm password"
								/>
							</div>
							<div class="form-group mb-3">
								<button type="submit" class="btn btn-primary fw-medium py-2 px-3 w-100">
									<div class="d-flex align-items-center justify-content-center py-1">
										<i class="material-symbols-outlined text-white fs-20 me-2">autorenew</i>
										<span>Send</span>
									</div>
								</button>
							</div>
							<div class="form-group">
								<p>
									Back to <a href="/auth/login" class="fw-medium text-primary text-decoration-none"
										>Login</a
									>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
