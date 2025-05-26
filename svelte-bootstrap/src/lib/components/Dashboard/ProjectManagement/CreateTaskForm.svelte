<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleSubmit(event) {
		event.preventDefault();
		// Submit logic...
		dispatch('closeForm');
	}
</script>

<form on:submit={handleSubmit}>
	<div class="form-group mb-4">
		<label class="label" for="task-id">Task ID</label>
		<input type="text" id="task-id" class="form-control text-dark" placeholder="Task ID" />
	</div>
	<div class="form-group mb-4">
		<label class="label" for="task-title">Task Title</label>
		<input type="text" id="task-title" class="form-control text-dark" placeholder="Task Title" />
	</div>
	<div class="form-group mb-4">
		<label class="label" for="assigned-to">Assigned To</label>
		<input type="text" id="assigned-to" class="form-control text-dark" placeholder="Assigned To" />
	</div>
	<div class="form-group mb-4">
		<label class="label" for="due-date">Due Date</label>
		<input type="date" id="due-date" class="form-control text-dark" />
	</div>
	<div class="form-group mb-4">
		<label class="label" for="priority">Priority</label>
		<select
			id="priority"
			class="form-select form-control text-dark"
			aria-label="Default select example"
		>
			<option selected>High</option>
			<option value="1">Low</option>
			<option value="2">Medium</option>
		</select>
	</div>

	<div class="form-group mb-4">
		<label class="label" for="status">Status</label>
		<select
			id="status"
			class="form-select form-control text-dark"
			aria-label="Default select example"
		>
			<option selected>Finished</option>
			<option value="1">Pending</option>
			<option value="2">In Progress</option>
			<option value="3">Cancelled</option>
		</select>
	</div>

	<div class="form-group mb-4">
		<label class="label" for="action">Action</label>
		<select
			id="action"
			class="form-select form-control text-dark"
			aria-label="Default select example"
		>
			<option selected>Yes</option>
			<option value="1">No</option>
		</select>
	</div>

	<div class="form-group d-flex gap-3">
		<button class="btn btn-primary text-white fw-semibold py-2 px-2 px-sm-3">
			<span class="py-sm-1 d-block">
				<i class="ri-add-line text-white"></i>
				<span>Create Task</span>
			</span>
		</button>
	</div>
</form>
