<script>
	export let page = 'Calendar';
	export let parentLink = '/dashboard';
	export let category = 'Others';
</script>

<div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
	<h3 class="mb-0">{page}</h3>

	<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
		<ol class="breadcrumb align-items-center mb-0 lh-1">
			<li class="breadcrumb-item">
				<a href={parentLink} class="d-flex align-items-center text-decoration-none">
					<i class="ri-home-4-line fs-18 text-primary me-1"></i>
					<span class="text-secondary fw-medium hover">Dashboard</span>
				</a>
			</li>
			<li class="breadcrumb-item active" aria-current="page">
				<span class="fw-medium">{category}</span>
			</li>
			<li class="breadcrumb-item active" aria-current="page">
				<span class="fw-medium">{page}</span>
			</li>
		</ol>
	</nav>
</div>
