<script>
	let activeTab = 'all';

	const tabs = [
		{ id: 'all', label: 'All Message' },
		{ id: 'group', label: 'Group Chat' },
		{ id: 'contacts', label: 'Contacts' }
	];

	function setActiveTab(tabId) {
		console.log(tabId);
		activeTab = tabId;
	}
</script>

<div class="col-xxl-4 col-xl-5 col-lg-5 col-md-5">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="mb-4">
				<h4 class="fw-medium fs-16 mb-0 mb-3">Messages</h4>
				<form class="position-relative default-src-form">
					<input type="text" class="form-control rounded-1" placeholder="Search here" />
					<i
						class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y fs-18"
						>search</i
					>
				</form>
			</div>

			<ul class="nav nav-tabs justify-content-between chat-tabs mb-4" id="myTab" role="tablist">
				{#each tabs as { id, label }}
					<li class="nav-item" role="presentation">
						<button
							class="nav-link p-0 border-0 fw-medium text-body rounded-0 pb-2 {activeTab === id
								? 'active'
								: ''}"
							type="button"
							on:click={() => setActiveTab(id)}
						>
							{label}
						</button>
					</li>
				{/each}
			</ul>

			<div class="tab-content" id="myTabContent" style="overflow: overlay;">
				{#if activeTab == 'all'}
					<div
						class="tab-pane fade show active"
						id="all-message-tab-pane"
						role="tabpanel"
						aria-labelledby="all-message-tab"
						tabindex="0"
					>
						<div class="max-h-497">
							<span class="mb-3 d-block fw-medium fs-12">
								<i class="ri-pushpin-line fs-14"></i>
								<span class="ms-1">PINNED</span>
							</span>
							<ul class="ps-0 mb-4 list-unstyled chat-list">
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-48.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Sarah Smith</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hello every one. Are you reday for meetig</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">Just Now</span>
										<span
											class="fs-12 fw-medium bg-primary text-white rounded-circle wh-16 lh-16 d-inline-block text-center"
											>2</span
										>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom border-color-gray pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-49.jpg"
												class="wh-48 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1">
											<h4 class="fs-16 fw-semibold mb-1">Michael Johnson</h4>
											<span class="text-success">Typing...</span>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">10:20 AM</span>
										<i class="ri-check-double-line fs-16 text-primary"></i>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-50.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-warning border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Sarah Smith</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Voice message...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">9:30 AM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-51.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">David Martinez</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Excellent work...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">3:20 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-52.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">David Martinez</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Excellent work...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">3:20 PM</span>
										<span
											class="fs-12 fw-medium bg-primary text-white rounded-circle wh-16 lh-16 d-inline-block text-center"
											>5</span
										>
									</div>
								</li>
							</ul>
							<span class="mb-3 d-block fw-medium fs-12">
								<i class="ri-chat-poll-line fs-16"></i>
								<span class="ms-1">ALL MESSAGE</span>
							</span>
							<ul class="ps-0 mb-0 list-unstyled chat-list">
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-53.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Jessica Taylor</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hello! Mr..</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">12:00 AM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-54.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Christopher Lee</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Very good...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">8:30 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-55.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Amanda Rodriguez</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>That’s cool...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">2:20 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-56.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Daniel Garcia</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Good morning!</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">10:00 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-57.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Jennifer Thomas</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hi John!</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">11:10 AM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-58.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Elizabeth Clark</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Sounds good...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">12:30 PM</span>
									</div>
								</li>
								<li class="d-flex justify-content-between align-items-center cursor">
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-59.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">William Lewis</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>How are you?</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">11:20 AM</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				{:else if activeTab == 'group'}
					<div
						class="tab-pane fade show active"
						id="group-chat-tab-pane"
						role="tabpanel"
						aria-labelledby="group-chat-tab"
						tabindex="0"
					>
						<div class="max-h-497">
							<span class="mb-3 d-block fw-medium fs-12">
								<i class="ri-pushpin-line fs-14"></i>
								<span class="ms-1">PINNED</span>
							</span>
							<ul class="ps-0 mb-4 list-unstyled chat-list">
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/wordpress.png"
												class="wh-45 rounded-circle"
												alt="wordpress"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Wordpress</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hello every one. Are you reday for meetig</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">Just Now</span>
										<span
											class="fs-12 fw-medium bg-primary text-white rounded-circle wh-16 lh-16 d-inline-block text-center"
											>2</span
										>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom border-color-gray pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img src="/assets/images/html.png" class="wh-48 rounded-circle" alt="html" />
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1">
											<h4 class="fs-16 fw-semibold mb-1">HTML</h4>
											<span class="text-success">Typing...</span>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">10:20 AM</span>
										<i class="ri-check-double-line fs-16 text-primary"></i>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/question-and-answer.png"
												class="wh-45 rounded-circle"
												alt="question-and-answer"
											/>
											<div
												class="position-absolute p-1 bg-warning border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">QA TEST</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Voice message...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">9:30 AM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/social-media.png"
												class="wh-45 rounded-circle"
												alt="social-media"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Digital Marketing</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Excellent work...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">3:20 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-52.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Team David</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Excellent work...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">3:20 PM</span>
										<span
											class="fs-12 fw-medium bg-primary text-white rounded-circle wh-16 lh-16 d-inline-block text-center"
											>5</span
										>
									</div>
								</li>
							</ul>
							<span class="mb-3 d-block fw-medium fs-12">
								<i class="ri-chat-poll-line fs-16"></i>
								<span class="ms-1">ALL MESSAGE</span>
							</span>
							<ul class="ps-0 mb-0 list-unstyled chat-list">
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-53.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Jessica Taylor</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hello! Mr..</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">12:00 AM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-54.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Christopher Lee</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Very good...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">8:30 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-55.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Amanda Rodriguez</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>That’s cool...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">2:20 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-56.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Daniel Garcia</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Good morning!</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">10:00 PM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-57.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Jennifer Thomas</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hi John!</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">11:10 AM</span>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-58.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Elizabeth Clark</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Sounds good...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">12:30 PM</span>
									</div>
								</li>
								<li class="d-flex justify-content-between align-items-center cursor">
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-59.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">William Lewis</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>How are you?</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12">11:20 AM</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				{:else if activeTab == 'contacts'}
					<div
						class="tab-pane fade show active"
						id="contacts-tab-pane"
						role="tabpanel"
						aria-labelledby="contacts-tab"
						tabindex="0"
					>
						<div class="max-h-497">
							<span class="mb-3 d-block fw-medium fs-12">
								<i class="ri-pushpin-line fs-14"></i>
								<span class="ms-1">PINNED</span>
							</span>
							<ul class="ps-0 mb-4 list-unstyled chat-list">
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-48.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Sarah Smith</h4>
											<span
												class="d-inline-block text-truncate text-danger"
												style="max-width: 150px;">Missed Call</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">Just Now</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom border-color-gray pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-49.jpg"
												class="wh-48 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1">
											<h4 class="fs-16 fw-semibold mb-1">Michael Johnson</h4>
											<span class="text-success">Received Call</span>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">10:20 AM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-50.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-warning border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Sarah Smith</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Voice message...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">9:30 AM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-51.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">David Martinez</h4>
											<span
												class="d-inline-block text-truncate text-success"
												style="max-width: 150px;">Received Call</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">3:20 PM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-52.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">David Martinez</h4>
											<span
												class="d-inline-block text-truncate text-success"
												style="max-width: 150px;">Received Call</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">3:20 PM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
							</ul>
							<span class="mb-3 d-block fw-medium fs-12">
								<i class="ri-chat-poll-line fs-16"></i>
								<span class="ms-1">ALL MESSAGE</span>
							</span>
							<ul class="ps-0 mb-0 list-unstyled chat-list">
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-53.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Jessica Taylor</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hello! Mr..</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">12:00 AM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-54.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Christopher Lee</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Very good...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">8:30 PM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-55.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Amanda Rodriguez</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>That’s cool...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">2:20 PM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-56.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Daniel Garcia</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Good morning!</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">10:00 PM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-57.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Jennifer Thomas</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Hi John!</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">11:10 AM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li
									class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3 cursor"
								>
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-58.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-danger border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">Elizabeth Clark</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>Sounds good...</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">12:30 PM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
								<li class="d-flex justify-content-between align-items-center cursor">
									<div class="d-flex align-items-center">
										<div class="flex-shrink-0 position-relative">
											<img
												src="/assets/images/user-59.jpg"
												class="wh-45 rounded-circle"
												alt="user"
											/>
											<div
												class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
											></div>
										</div>
										<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
											<h4 class="fs-16 fw-semibold mb-1">William Lewis</h4>
											<span class="d-inline-block text-truncate" style="max-width: 150px;"
												>How are you?</span
											>
										</div>
									</div>
									<div class="text-end">
										<span class="d-block fs-12 mb-1">11:20 AM</span>
										<div class="d-flex gap-1 justify-content-between">
											<i
												class="ri-phone-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
											<i
												class="ri-vidicon-fill fs-14 text-primary wh-25 lh-25 bg-primary rounded-1 bg-opacity-10 text-center hover-bg"
											></i>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
