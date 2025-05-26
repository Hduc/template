<script>
	import ActionList from './ActionList.svelte';
	import ActionList2 from './ActionList2.svelte';
	import ActionList3 from './ActionList3.svelte';
</script>

<div
	class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mb-4"
>
	<div class="d-flex position-relative top-3">
		<div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
			<div class="form-check-label">
				<ActionList />
			</div>
		</div>
		<button
			class="pe-0 border-0 bg-transparent ms-4 ps-2"
			data-bs-toggle="tooltip"
			data-bs-placement="top"
			data-bs-title="Archive"
		>
			<i class="material-symbols-outlined fs-20 text-body hover">archive</i>
		</button>
		<button
			class="pe-0 border-0 bg-transparent ms-2"
			data-bs-toggle="tooltip"
			data-bs-placement="top"
			data-bs-title="Help"
		>
			<i class="material-symbols-outlined fs-20 text-body hover">help_clinic</i>
		</button>
		<button
			class="pe-0 border-0 bg-transparent ms-2"
			data-bs-toggle="tooltip"
			data-bs-placement="top"
			data-bs-title="Tresh"
		>
			<i class="material-symbols-outlined fs-20 text-body hover">delete</i>
		</button>
		<ActionList2 />
	</div>
	<div class="d-flex align-items-center">
		<div class="d-flex align-items-center">
			<span class="fs-12 fw-medium me-2">1 - 5 of 12</span>
			<nav aria-label="Page navigation example">
				<ul class="pagination mb-0 justify-content-center">
					<li class="page-item">
						<a class="page-link icon" href="/dashboard/apps/email/inbox" aria-label="Previous">
							<i class="material-symbols-outlined">keyboard_arrow_left</i>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link icon" href="/dashboard/apps/email/inbox" aria-label="Next">
							<i class="material-symbols-outlined">keyboard_arrow_right</i>
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="d-flex align-items-center ms-3">
			<i class="material-symbols-outlined">menu</i>
			<ActionList3 />
		</div>
	</div>
</div>
