<script>
	import { onMount } from 'svelte';
	import DropdownFilter from '$lib/components/Common/DropdownFilter.svelte';

	let search = '';
	let sortKey = 'callerName'; // default sort by name
	let sortAsc = true;

	// Sample static call data
	let calls = [
		{
			id: 1,
			name: 'Emily Johnson',
			phone: '+1 555-123-4567',
			image: '/assets/images/user-166.png',
			type: 'Inbound',
			duration: 5,
			status: 'Resolved',
			time: '10:30 AM',
			csat: 90
		},
		{
			id: 2,
			name: 'Sarah Green',
			phone: '+44 20 7946 0958',
			image: '/assets/images/user-167.png',
			type: 'Outbound',
			duration: 3,
			status: 'Pending',
			time: '10:35 AM',
			csat: 85
		},
		{
			id: 3,
			name: 'Adam Smith',
			phone: '+1 555-234-5678',
			image: '/assets/images/user-168.png',
			type: 'Inbound',
			duration: 7,
			status: 'Resolved',
			time: '10:40 AM',
			csat: 83
		},
		{
			id: 4,
			name: 'Laura Martin',
			phone: '+61 2 1234 5678',
			image: '/assets/images/user-169.png',
			type: 'Inbound',
			duration: 4,
			status: 'Dropped',
			time: '10:45 AM',
			csat: 87
		}
	];

	// Computed list based on search + sort
	$: filteredCalls = calls
		.filter((call) => call.name.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) => {
			if (sortKey === 'duration' || sortKey === 'csat') {
				// Numeric fields: duration, csat
				return sortAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
			} else {
				// Text fields: name, type, status, time
				const aVal = (a[sortKey] || '').toString();
				const bVal = (b[sortKey] || '').toString();
				return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
			}
		});

	function setSort(key) {
		if (sortKey === key) {
			sortAsc = !sortAsc; // toggle asc/desc
		} else {
			sortKey = key;
			sortAsc = true;
		}
	}
</script>

<div class="card custom-shadow rounded-3 bg-white border mb-4">
	<div
		class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4"
	>
		<h3 class="mb-0 fw-semibold">Recent Calls</h3>
		<div class="d-flex align-items-center">
			<form class="position-relative table-src-form" on:submit|preventDefault>
				<input
					type="text"
					class="form-control border-0"
					style="width: 265px;"
					placeholder="Search for a name..."
					bind:value={search}
				/>
				<i class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
					>search</i
				>
			</form>
			<DropdownFilter />
		</div>
	</div>

	<div class="default-table-area style-three recent-calls for-data-table">
		<div class="table-responsive">
			<table class="table align-middle border-0">
				<thead class="border-bottom">
					<tr>
						<th class="bg-transparent cursor-pointer" on:click={() => setSort('name')}
							>Caller Name</th
						>
						<th class="bg-transparent cursor-pointer" on:click={() => setSort('type')}>Call Type</th
						>
						<th class="bg-transparent cursor-pointer" on:click={() => setSort('duration')}
							>Duration</th
						>
						<th class="bg-transparent cursor-pointer" on:click={() => setSort('status')}>Status</th>
						<th class="bg-transparent cursor-pointer" on:click={() => setSort('time')}>Time</th>
						<th class="bg-transparent cursor-pointer" on:click={() => setSort('csat')}>CSAT</th>
					</tr>
				</thead>

				<tbody>
					{#each filteredCalls as call}
						<tr>
							<td>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0">
										<img src={call.image} class="rounded-circle" alt="user" />
									</div>
									<div class="flex-grow-1 ms-2">
										<h4 class="fs-14 fw-medium mb-0">{call.name}</h4>
										<span class="fs-12 text-body">{call.phone}</span>
									</div>
								</div>
							</td>
							<td
								><span class={call.type === 'Inbound' ? 'text-primary' : 'text-danger-50'}
									>{call.type}</span
								></td
							>
							<td><span class="fw-medium">{call.duration} mins</span></td>
							<td
								><span class={call.status === 'Resolved' ? 'text-success-50' : 'text-danger-50'}
									>{call.status}</span
								></td
							>
							<td><span class="fw-medium">{call.time}</span></td>
							<td><span class="fw-medium">{call.csat}%</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
			<span class="asterisk">
				<div
					class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 custom-padding-30 pt-4"
				>
					<div class="fs-12 fw-medium" id="PF">Page 1 to 1 of 4 Entries</div>

					<div class="pagination overflow-hidden" id="pgN">
						<nav aria-label="Page navigation example">
							<ul class="pagination mb-0 justify-content-center align-items-center">
								<li class="page-item">
									<a class="page-link icon" aria-label="Previous" id="x__PREV__X">
										<i class="material-symbols-outlined">keyboard_arrow_left</i>
									</a>
								</li>
								<li class="page-item">
									<a class="page-link icon" aria-label="Next" id="x__NEXT__X">
										<i class="material-symbols-outlined">keyboard_arrow_right</i>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</span>
		</div>
	</div>
</div>

<style>
	.cursor-pointer {
		cursor: pointer;
	}

	.cursor-pointer:after {
		content: '\f326';
		font-family: remixicon !important;
		margin-left: 4px;
	}
</style>
