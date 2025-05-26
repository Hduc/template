<script>
	import BedOccupancyRate from '$lib/components/Dashboard/Hospital/BedOccupancyRate.svelte';
	import CriticalPatients from '$lib/components/Dashboard/Hospital/CriticalPatients.svelte';
	import EmergencyRoomVisits from '$lib/components/Dashboard/Hospital/EmergencyRoomVisits.svelte';
	import HospitalEarnings from '$lib/components/Dashboard/Hospital/HospitalEarnings.svelte';
	import PatientAdmissionsDischarges from '$lib/components/Dashboard/Hospital/PatientAdmissionsDischarges.svelte';
	import PatientAppointments from '$lib/components/Dashboard/Hospital/PatientAppointments.svelte';
	import PatientByAge from '$lib/components/Dashboard/Hospital/PatientByAge.svelte';
	import ScheduleAppointment from '$lib/components/Dashboard/Hospital/ScheduleAppointment.svelte';
	import ScheduleToday from '$lib/components/Dashboard/Hospital/ScheduleToday.svelte';
</script>

<svelte:head>
	<title>Hospital | Trezo - Svelte & Bootsrap 5 Admin Dashboard Template</title>
</svelte:head>

<div class="row">
	<ScheduleToday />
	<PatientAdmissionsDischarges />
</div>

<div class="row">
	<EmergencyRoomVisits />
	<CriticalPatients />
	<BedOccupancyRate />
</div>

<div class="row">
	<PatientAppointments />
	<ScheduleAppointment />
</div>

<div class="row">
	<PatientByAge />
	<HospitalEarnings />
</div>
