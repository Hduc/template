import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReRevenueService } from './re-revenue.service';

@Component({
    selector: 'app-re-revenue',
    imports: [MatCardModule],
    templateUrl: './re-revenue.component.html',
    styleUrl: './re-revenue.component.scss'
})
export class ReRevenueComponent {

	constructor(
		private reRevenueService: ReRevenueService
	) {}

	ngOnInit(): void {
		this.reRevenueService.loadChart();
	}

}