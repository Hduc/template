<svelte:head>
	<title>Forgot Password | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="container">
	<div class="main-content d-flex flex-column p-0">
		<div class="m-auto m-1230">
			<div class="row align-items-center">
				<div class="col-lg-6 d-none d-lg-block">
					<img src="/assets/images/forgot.jpg" class="rounded-3" alt="forgot" />
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
						<h3 class="fs-28 mb-2">Forgot your password?</h3>
						<p class="fw-medium fs-16 mb-4">
							Enter the email address you used when you joined and we’ll send you instructions to
							reset your password.
						</p>
						<form>
							<div class="form-group mb-3">
								<label for="email-address" class="label text-secondary">Email Address</label>
								<input
									id="email-address"
									type="email"
									class="form-control"
									placeholder="example@trezo.com"
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
