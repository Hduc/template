<script>
	import DropdownMessageAction from './DropdownMessageAction.svelte';
</script>

<div class="col-xxl-8 col-xl-7 col-lg-7 col-md-7">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div
				class="d-flex justify-content-between align-items-center flex-wrap ga-2 border-bottom pb-4 mb-4"
			>
				<div class="d-flex align-items-center">
					<div class="flex-shrink-0 position-relative">
						<img src="/assets/images/user-49.jpg" class="wh-52 rounded-circle" alt="user" />
						<div
							class="position-absolute p-1 bg-success border border-2 border-white rounded-circle status-position2"
						></div>
					</div>
					<div class="flex-grow-1 ms-2 ps-1 position-relative top-2">
						<h4 class="fs-16 fw-semibold mb-1">Michael Johnson</h4>
						<span>Active now</span>
					</div>
				</div>
				<ul class="ps-0 mb-0 list-unstyled chat-call-option d-flex gap-1 gap-xl-3">
					<li>
						<button
							class="p-0 border-0 bg-transparent"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title="Audio Call"
						>
							<i class="ri-phone-line fs-16 text-body hover"></i>
						</button>
					</li>
					<li>
						<button
							class="p-0 border-0 bg-transparent"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-title="Video Call"
						>
							<i class="ri-vidicon-fill fs-16 text-body hover"></i>
						</button>
					</li>
					<li>
						<DropdownMessageAction />
					</li>
				</ul>
			</div>

			<span class="d-block fs-12 mb-2">2023-11-10 09:15 AM</span>

			<ul class="mb-0 list-unstyled chat-details max-h-419" style="overflow: overlay;">
				<li class="mb-4">
					<div class="d-sm-flex">
						<div class="flex-shrink-0">
							<img src="/assets/images/user-49.jpg" class="wh-48 rounded-circle" alt="user" />
						</div>
						<div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
							<div class="d-flex align-items-center">
								<p>Hey Micheals, have you had a chance to check out the new admin dashboard?</p>

								<DropdownMessageAction />
							</div>
							<span class="fs-12 d-block">19:04 PM</span>
						</div>
					</div>
				</li>
				<li class="mb-4 ms-auto own-chat">
					<div class="d-sm-flex text-end">
						<div class="flex-grow-1 mb-3 mb-sm-0">
							<div class="d-flex align-items-center justify-content-end">
								<DropdownMessageAction />

								<p>Oh, you mean the one for project management?</p>
							</div>
							<span class="fs-12 d-block">09:20 AM</span>
						</div>
					</div>
				</li>
				<li class="mb-4">
					<div class="d-sm-flex">
						<div class="flex-shrink-0">
							<img src="/assets/images/user-49.jpg" class="wh-48 rounded-circle" alt="user" />
						</div>
						<div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
							<div class="d-flex align-items-center">
								<p>
									Yeah, that's the one! It's got a sleek Material Design, and the features are
									pretty robust.
								</p>

								<DropdownMessageAction />
							</div>
							<span class="fs-12 d-block">09:20 AM</span>
						</div>
					</div>
				</li>
				<li class="mb-4 ms-auto own-chat">
					<div class="d-sm-flex text-end">
						<div class="flex-grow-1 mb-3 mb-sm-0">
							<div class="d-flex align-items-center justify-content-end">
								<DropdownMessageAction />

								<p>Nice! What features are you finding interesting?</p>
							</div>
							<span class="fs-12 d-block">09:21 AM</span>
						</div>
					</div>
				</li>
				<li class="mb-4">
					<div class="d-sm-flex">
						<div class="flex-shrink-0">
							<img src="/assets/images/user-49.jpg" class="wh-48 rounded-circle" alt="user" />
						</div>
						<div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
							<div class="d-flex align-items-center">
								<p>
									Well, it has a project overview with all the key metrics on the landing page –
									project
								</p>

								<DropdownMessageAction />
							</div>
							<span class="fs-12 d-block">09:22 AM</span>
						</div>
					</div>
				</li>
				<li class="mb-4 ms-auto own-chat">
					<div class="d-sm-flex text-end">
						<div class="flex-grow-1 mb-3 mb-sm-0">
							<div class="d-flex align-items-center justify-content-end">
								<DropdownMessageAction />

								<p>That sounds handy. How about the task management features?</p>
							</div>
							<span class="fs-12 d-block">09:21 AM</span>
						</div>
					</div>
				</li>
				<li class="mb-4">
					<div class="d-sm-flex">
						<div class="flex-shrink-0">
							<img src="/assets/images/user-49.jpg" class="wh-48 rounded-circle" alt="user" />
						</div>
						<div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
							<div class="d-flex align-items-center">
								<p>
									Oh, they've got this Kanban board for task management. You can drag and drop tasks
									between columns – it's so intuitive.
								</p>

								<DropdownMessageAction />
							</div>
							<span class="fs-12 d-block">09:30 AM</span>
						</div>
					</div>
				</li>
				<li class="mb-4 ms-auto own-chat">
					<div class="d-sm-flex text-end">
						<div class="flex-grow-1 mb-3 mb-sm-0">
							<div class="d-flex align-items-center justify-content-end">
								<DropdownMessageAction />

								<p>Sweet! What about team collaboration?</p>
							</div>
							<span class="fs-12 d-block">09:31AM</span>
						</div>
					</div>
				</li>
			</ul>

			<div
				class="d-sm-flex justify-content-between align-items-center bg-gary-light for-dark rounded-3 p-4"
			>
				<div class="d-flex gap-3 justify-content-center justify-content-sm-start">
					<button
						class="p-0 border-0 bg-transparent"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						data-bs-title="Emoji"
						aria-label="Emoji"
					>
						<i class="ri-emotion-laugh-line fs-18 text-body"></i>
					</button>
					<button
						class="p-0 border-0 bg-transparent"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						data-bs-title="Link"
						aria-label="link"
					>
						<i class="ri-link-m fs-18 text-body"></i>
					</button>
					<button
						class="p-0 border-0 bg-transparent"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						data-bs-title="Voice"
						aria-label="voice"
					>
						<i class="ri-mic-line fs-18 text-body"></i>
					</button>
					<button
						class="p-0 border-0 bg-transparent"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						data-bs-title="Image"
						aria-label="image"
					>
						<i class="ri-image-line fs-18 text-body"></i>
					</button>
				</div>
				<form action="" class="w-100 ps-sm-4 ps-xxl-4 ms-xxl-3 mt-3 mt-sm-0 position-relative">
					<input
						type="text"
						class="form-control rounded-1 border-0 text-dark h-55"
						placeholder="Type your message"
					/>
					<button
						class="p-0 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y pe-3 d-sm-none"
					>
						<i class="material-symbols-outlined fs-24 text-primary">send</i>
					</button>
				</form>
				<button class="p-0 border-0 bg-primary d-none d-sm-block rounded-1 ms-3">
					<i class="material-symbols-outlined fs-24 text-white wh-55 lh-55 d-inline-block">send</i>
				</button>
			</div>
		</div>
	</div>
</div>
