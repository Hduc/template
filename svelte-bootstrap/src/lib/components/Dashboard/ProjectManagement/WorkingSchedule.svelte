<script>
	import { onMount } from 'svelte';
	import UpcomingEvents from './UpcomingEvents.svelte';

	let calendarContainer;

	onMount(() => {
		const mesos = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const dies_abr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

		Number.prototype.pad = function (num) {
			return this.toString().padStart(num, '0');
		};

		function calendari(widget, data) {
			let original = widget.querySelector('.actiu');
			if (!original) {
				original = document.createElement('table');
				original.className = 'actiu';
				original.setAttribute(
					'data-actual',
					`${data.getFullYear()}/${data.getMonth().pad(2)}/${data.getDate().pad(2)}`
				);
				widget.appendChild(original);
			}
			let diff = data - new Date(original.getAttribute('data-actual'));
			diff = new Date(diff).getMonth();

			const e = document.createElement('table');
			e.className = diff === 0 ? 'amagat-esquerra' : 'amagat-dreta';
			widget.appendChild(e);
			e.setAttribute(
				'data-actual',
				`${data.getFullYear()}/${data.getMonth().pad(2)}/${data.getDate().pad(2)}`
			);

			let fila = document.createElement('tr');
			let titol = document.createElement('th');
			titol.colSpan = 7;

			let boto_prev = document.createElement('button');
			boto_prev.className = 'boto-prev';
			let boto_next = document.createElement('button');
			boto_next.className = 'boto-next';

			// boto_prev.innerHTML = '&#8592;';
			// boto_next.innerHTML = '&#8594;';

			titol.appendChild(boto_prev);
			titol.appendChild(document.createElement('span')).innerHTML =
				mesos[data.getMonth()] + '<span class="any"> ' + data.getFullYear() + '</span>';
			titol.appendChild(boto_next);

			boto_prev.onclick = () => {
				data.setMonth(data.getMonth() - 1);
				calendari(widget, data);
			};
			boto_next.onclick = () => {
				data.setMonth(data.getMonth() + 1);
				calendari(widget, data);
			};

			fila.appendChild(titol);
			e.appendChild(fila);

			fila = document.createElement('tr');
			for (let i = 1; i < 7; i++) {
				fila.innerHTML += '<th>' + dies_abr[i] + '</th>';
			}
			fila.innerHTML += '<th>' + dies_abr[0] + '</th>';
			e.appendChild(fila);

			let inici_mes = new Date(data.getFullYear(), data.getMonth(), -1).getDay();
			let actual = new Date(data.getFullYear(), data.getMonth(), -inici_mes);

			for (let s = 0; s < 6; s++) {
				let fila = document.createElement('tr');
				for (let d = 1; d < 8; d++) {
					let cela = document.createElement('td');
					let span = document.createElement('span');
					cela.appendChild(span);
					span.innerHTML = actual.getDate();

					if (actual.getMonth() !== data.getMonth()) cela.className = 'fora';
					if (data.getDate() === actual.getDate() && data.getMonth() === actual.getMonth()) {
						cela.className = 'avui';
					}
					actual.setDate(actual.getDate() + 1);
					fila.appendChild(cela);
				}
				e.appendChild(fila);
			}

			setTimeout(() => {
				e.className = 'actiu';
				original.className += diff === 0 ? ' amagat-dreta' : ' amagat-esquerra';
			}, 20);

			original.className = 'inactiu';
			setTimeout(() => {
				const inactius = widget.querySelectorAll('.inactiu');
				inactius.forEach((el) => widget.removeChild(el));
			}, 0);
		}

		calendari(calendarContainer, new Date());
	});
</script>

<div class="col-xxl-4 col-lg-4">
	<div class="card bg-white border-0 rounded-3 mb-4">
		<div class="card-body p-4">
			<div class="mb-3 mb-lg-4">
				<h3 class="mb-0">Working Schedule</h3>
			</div>
			<div class="calendar-wraps">
				<div id="calendari" bind:this={calendarContainer}></div>
			</div>

			<UpcomingEvents />
		</div>
	</div>
</div>
