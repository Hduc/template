<script>
	import { onMount } from 'svelte';
	let modalEl;
	let modalInstance;

	onMount(async () => {
		const { Modal } = await import('bootstrap'); // Import Bootstrap's Modal from npm

		if (modalEl) {
			modalInstance = new Modal(modalEl, {
				backdrop: 'static',
				keyboard: false
			});
		}
	});

	function openModal() {
		modalInstance.show();
	}

	function closeModal() {
		modalInstance.hide();
	}
</script>

<div class="card border-0 rounded-3 bg-white mb-4">
	<div class="card-body p-4 pb-0">
		<div class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4">
			<h3 class="mb-0">Card</h3>
			<button
				class="btn btn-outline-primary hover-bg fs-14 fw-medium"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				on:click={openModal}
			>
				<i class="ri-add-line"></i>
				<span>Add Card</span>
			</button>
		</div>
		<div class="row">
			<div class="col-sm-6 mb-4">
				<div
					class="bg-img p-4 rounded-3"
					style="background-image: url(/assets/images/debit-card.png);"
				>
					<div class="d-flex align-content-center justify-content-between mb-4">
						<span class="text-white fs-12 fw-medium">Debit Card</span>
						<img src="/assets/images/debit.svg" alt="debit" />
					</div>
					<img class="mb-4" src="/assets/images/board-1.png" alt="board" />
					<h3 class="fw-semibold text-white mb-5 pb-md-4 d-flex gap-3">
						<span>5322</span><span>0520</span><span>0744</span><span>1794</span>
					</h3>
					<div class="d-flex align-content-center justify-content-between">
						<span class="text-white">David Farrior</span>
						<span class="text-white fs-12 fw-medium">EXP : 12/30</span>
					</div>
				</div>
			</div>
			<div class="col-sm-6 mb-4">
				<div
					class="bg-img p-4 rounded-3"
					style="background-image: url(/assets/images/virtual-card.png);"
				>
					<div class="d-flex align-content-center justify-content-between mb-4">
						<span class="text-white fs-12 fw-medium">Debit Card</span>
						<img src="/assets/images/virtual.svg" alt="debit" />
					</div>
					<img class="mb-4" src="/assets/images/board-1.png" alt="board" />
					<h3 class="fw-semibold text-white mb-5 pb-md-4 d-flex gap-3">
						<span>....</span><span>....</span><span>....</span><span>1794</span>
					</h3>
					<div class="d-flex align-content-center justify-content-between">
						<span class="text-white">David Farrior</span>
						<span class="text-white fs-12 fw-medium">EXP : 12/30</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
<div
	bind:this={modalEl}
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered" style="max-width: 738px;">
		<div class="modal-content p-4 p-md-5">
			<div class="modal-header p-0 border-0">
				<h3 class="mb-0">Add Card Detail</h3>
				<button type="button" class="btn-close" on:click={closeModal} aria-label="Close"></button>
			</div>
			<div class="modal-body p-0 pt-4">
				<form>
					<div class="row">
						<div class="col-sm-6">
							<div class="mb-4">
								<label class="label text-secondary" for="full-name">Full Name</label>
								<input
									type="text"
									id="full-name"
									class="form-control h-55"
									placeholder="Enter name"
								/>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="mb-4">
								<label class="label text-secondary" for="full-name">Full Name</label>
								<input
									type="text"
									id="full-name"
									class="form-control h-55"
									placeholder="Enter name"
								/>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="mb-4">
								<label class="label text-secondary" for="full-name">Full Name</label>
								<input
									type="text"
									id="full-name"
									class="form-control h-55"
									placeholder="Enter name"
								/>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="mb-4">
								<label class="label text-secondary" for="cvv">CVV</label>
								<input type="number" id="cvv" class="form-control h-55" placeholder="212" />
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="modal-footer border-0 p-0">
				<button type="button" class="btn btn-danger text-white px-3" on:click={closeModal}
					>Cancel</button
				>
				<button type="button" class="btn btn-primary hover-bg px-3">Add Card</button>
			</div>
		</div>
	</div>
</div>
