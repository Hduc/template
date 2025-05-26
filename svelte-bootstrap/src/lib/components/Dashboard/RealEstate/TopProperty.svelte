<script>
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';
</script>

<div class="card bg-white border-0 rounded-3 mb-4">
	<div class="card-body p-4">
		<div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
			<h3 class="mb-0">Top Property</h3>

			<DropdownFilter />
		</div>

		<div class="d-flex align-items-center mb-4">
			<div class="flex-shrink-0">
				<img
					src="/assets/images/property-1.png"
					class="rounded-3"
					style="width: 40px; height: 40px;"
					alt="property"
				/>
			</div>
			<div class="flex-grow-1 ms-3">
				<h4 class="fs-16 mb-0">Industrial</h4>
				<span>36 Clay Street Indianapolis</span>
			</div>
		</div>
		<div class="d-flex align-items-center mb-4">
			<div class="flex-shrink-0">
				<img
					src="/assets/images/property-2.png"
					class="rounded-3"
					style="width: 40px; height: 40px;"
					alt="property"
				/>
			</div>
			<div class="flex-grow-1 ms-3">
				<h4 class="fs-16 mb-0">Office</h4>
				<span>07 Maple Street Los Angeles</span>
			</div>
		</div>
		<div class="d-flex align-items-center mb-4">
			<div class="flex-shrink-0">
				<img
					src="/assets/images/property-3.png"
					class="rounded-3"
					style="width: 40px; height: 40px;"
					alt="property"
				/>
			</div>
			<div class="flex-grow-1 ms-3">
				<h4 class="fs-16 mb-0">Multi-Family</h4>
				<span>94 Brooke Street Houston</span>
			</div>
		</div>
		<div class="d-flex align-items-center">
			<div class="flex-shrink-0">
				<img
					src="/assets/images/property-4.png"
					class="rounded-3"
					style="width: 40px; height: 40px;"
					alt="property"
				/>
			</div>
			<div class="flex-grow-1 ms-3">
				<h4 class="fs-16 mb-0">Retail</h4>
				<span>84 Pick Street Centennial</span>
			</div>
		</div>
	</div>
</div>
