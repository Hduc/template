<script>
	import AccountPayable from '$lib/components/Dashboard/Finance/AccountPayable.svelte';
	import AccountsReceivable from '$lib/components/Dashboard/Finance/AccountsReceivable.svelte';
	import CachMonth from '$lib/components/Dashboard/Finance/CachMonth.svelte';
	import Card from '$lib/components/Dashboard/Finance/Card.svelte';
	import ExpenseBreakdown from '$lib/components/Dashboard/Finance/ExpenseBreakdown.svelte';
	import IncomeSource from '$lib/components/Dashboard/Finance/IncomeSource.svelte';
	import NetProfit from '$lib/components/Dashboard/Finance/NetProfit.svelte';
	import Static from '$lib/components/Dashboard/Finance/Static.svelte';
	import TotalExpenses from '$lib/components/Dashboard/Finance/TotalExpenses.svelte';
	import TotalIncome from '$lib/components/Dashboard/Finance/TotalIncome.svelte';
	import TransactionHistory from '$lib/components/Dashboard/Finance/TransactionHistory.svelte';
	import WeeklyExpenses from '$lib/components/Dashboard/Finance/WeeklyExpenses.svelte';
</script>

<svelte:head>
	<title>Finance | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<TotalIncome />
	<TotalExpenses />
	<AccountsReceivable />
	<AccountPayable />
</div>

<div class="row">
	<div class="col-lg-8">
		<Static />
	</div>
	<div class="col-lg-4">
		<div class="row">
			<div class="col-md-6 col-lg-12">
				<CachMonth />
			</div>
			<div class="col-md-6 col-lg-12">
				<WeeklyExpenses />
			</div>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-xxl-4">
		<div class="row">
			<IncomeSource />
			<NetProfit />
		</div>
	</div>

	<div class="col-xxl-8">
		<div class="card bg-white border-0 rounded-3 mb-4">
			<TransactionHistory />
		</div>
	</div>
</div>

<div class="row">
	<div class="col-xxl-8 col-lg-7">
		<Card />
	</div>
	<div class="col-xxl-4 col-lg-5">
		<ExpenseBreakdown />
	</div>
</div>
