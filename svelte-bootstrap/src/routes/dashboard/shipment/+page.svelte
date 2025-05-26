<script>
	import AverageDeliveryTime from '$lib/components/Dashboard/Shipment/AverageDeliveryTime.svelte';
	import Chat from '$lib/components/Dashboard/Shipment/Chat.svelte';
	import LiveShipmentStatus from '$lib/components/Dashboard/Shipment/LiveShipmentStatus.svelte';
	import OnTimeDelivery from '$lib/components/Dashboard/Shipment/OnTimeDelivery.svelte';
	import ShipmentDelivered from '$lib/components/Dashboard/Shipment/ShipmentDelivered.svelte';
	import ShipmentList from '$lib/components/Dashboard/Shipment/ShipmentList.svelte';
	import ShipmentTopCountries from '$lib/components/Dashboard/Shipment/ShipmentTopCountries.svelte';
	import TodaysShipments from '$lib/components/Dashboard/Shipment/TodaysShipments.svelte';
	import TopShippingMethods from '$lib/components/Dashboard/Shipment/TopShippingMethods.svelte';
	import TotalCustomer from '$lib/components/Dashboard/Shipment/TotalCustomer.svelte';
	import TotalIncome from '$lib/components/Dashboard/Shipment/TotalIncome.svelte';
	import TotalOrder from '$lib/components/Dashboard/Shipment/TotalOrder.svelte';
	import TotalShipment from '$lib/components/Dashboard/Shipment/TotalShipment.svelte';
	import TrackingOrder from '$lib/components/Dashboard/Shipment/TrackingOrder.svelte';
</script>

<svelte:head>
	<title>Shipment | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<div class="col-lg-6">
		<div class="row">
			<TotalIncome />
			<TotalShipment />
			<TotalCustomer />
			<TotalOrder />
		</div>
	</div>
	<div class="col-lg-6">
		<ShipmentDelivered />
	</div>
</div>

<div class="row">
	<div class="col-xxl-8">
		<div class="row">
			<AverageDeliveryTime />
			<LiveShipmentStatus />
		</div>

		<div class="card bg-white border-0 rounded-3 mb-4">
			<TrackingOrder />
		</div>
	</div>

	<div class="col-xxl-4">
		<div class="row">
			<ShipmentTopCountries />
			<Chat />
		</div>
	</div>
</div>

<div class="row justify-content-center">
	<TopShippingMethods />
	<TodaysShipments />
	<OnTimeDelivery />
</div>

<div class="card bg-white border-0 rounded-3 mb-4">
	<ShipmentList />
</div>
