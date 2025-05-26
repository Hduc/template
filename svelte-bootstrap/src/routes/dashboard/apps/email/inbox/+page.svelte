<script>
	import BreadCrumb from '$lib/components/Common/BreadCrumb.svelte';
	import EmailSidebar from '$lib/components/Dashboard/Apps/EmailSidebar.svelte';
	import Header from '../Header.svelte';
	import EmailList from './EmailList.svelte';
	import EmailListPromot from './EmailListPromot.svelte';

	let activeTab = 'primary'; // Default active tab
</script>

<svelte:head>
	<title>Inbox | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<BreadCrumb page="Inbox" category="APPS" parentLink="/dashboard" />

<div class="row justify-content-center">
	<EmailSidebar />

	<div class="col-xl-8 col-lg-9 col-md-8">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<div class="card-body p-4">
				<Header />

				<ul class="nav nav-tabs inbox-tabs flex-wrap gap-5 pb-4" id="myTab" role="tablist">
					<li class="nav-item" role="presentation">
						<button
							class="nav-link d-flex align-items-center p-0 bg-transparent border-0 text-body {activeTab ===
							'primary'
								? 'active'
								: ''}"
							id="primary-tab"
							type="button"
							role="tab"
							aria-controls="primary-tab-pane"
							aria-selected={activeTab === 'primary'}
							on:click={() => (activeTab = 'primary')}
						>
							<i class="material-symbols-outlined fs-20 text-body position-relative top-1">inbox</i>
							<span class="ms-2 fw-medium">Primary</span>
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button
							class="nav-link d-flex align-items-center p-0 bg-transparent border-0 text-body {activeTab ===
							'promotions'
								? 'active'
								: ''}"
							id="promotions-tab"
							role="tab"
							type="button"
							aria-controls="promotions-tab-pane"
							aria-selected={activeTab === 'promotions'}
							on:click={() => (activeTab = 'promotions')}
						>
							<i class="material-symbols-outlined fs-20 text-body position-relative top-1"
								>shoppingmode</i
							>
							<span class="ms-2 fw-medium">Promotions</span>
						</button>
					</li>
				</ul>

				<div class="tab-content" id="myTabContent">
					{#if activeTab === 'primary'}
						<div
							class="tab-pane fade show active"
							id="primary-tab-pane"
							role="tabpanel"
							aria-labelledby="primary-tab"
							tabindex="0"
						>
							<EmailList />
						</div>
					{:else if activeTab === 'promotions'}
						<div
							class="tab-pane fade show active"
							id="promotions-tab-pane"
							role="tabpanel"
							aria-labelledby="promotions-tab"
							tabindex="0"
						>
							<EmailListPromot />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
