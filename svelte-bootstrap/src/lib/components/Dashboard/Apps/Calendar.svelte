<script>
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import interactionPlugin from '@fullcalendar/interaction';

	let calendarEl; // bind:this will assign it

	onMount(() => {
		const calendar = new Calendar(calendarEl, {
			plugins: [dayGridPlugin, interactionPlugin],
			headerToolbar: {
				right: 'today,prev,next',
				left: 'title'
			},
			initialDate: '2024-06-30',
			navLinks: true,
			businessHours: true,
			editable: true,
			selectable: true,
			events: [
				{
					title: '10:00 - 12:30 PM Annual Conference 2023',
					start: '2024-06-04',
					className: 'success'
				},
				{
					title: '2:30 - 5:00 PM Tech Summit 2024',
					start: '2024-06-14',
					className: 'primary'
				},
				{
					title: '6:00 - 9:00 PM Product Lunch Webinar',
					start: '2024-06-23',
					className: 'primary-div'
				},
				{
					title: '9:00 - 12:00 PM Web Development Seminar',
					start: '2024-06-28',
					className: 'danger'
				}
			]
		});

		calendar.render();
	});
</script>

<div class="col-lg-8 col-md-6">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="calendar-wrap">
				<div id="calendar" bind:this={calendarEl}></div>
			</div>
		</div>
	</div>
</div>
