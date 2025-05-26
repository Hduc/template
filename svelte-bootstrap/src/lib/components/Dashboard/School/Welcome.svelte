<script>
	let todayDate = '';

	// On component mount
	import { onMount } from 'svelte';

	onMount(() => {
		const now = new Date();
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		todayDate = `Today - ${now.toLocaleDateString('en-US', options)}`;
	});
</script>

<div class="row align-items-center">
	<div class="col-md-7">
		<div class="mb-3 mb-md-4">
			<h3 class="fs-20 fw-semibold mb-1">School Overview Dashboard</h3>
			<p style="line-height: 1.4;">Manage Students, Teachers, and School Data Seamlessly!</p>
		</div>
	</div>
	<div class="col-md-5 text-md-end mb-4">
		<div
			class="d-inline-block rounded-1"
			style="border: 1px solid #DDE4FF; background-color: #ECF0FF; padding: 1px 10px;"
		>
			<i class="ri-calendar-line text-primary"></i>
			<span id="digital_date" class="text-primary ms-1">{todayDate}</span>
		</div>
	</div>
</div>
