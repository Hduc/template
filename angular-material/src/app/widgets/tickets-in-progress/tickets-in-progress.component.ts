import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TicketsInProgressService } from './tickets-in-progress.service';

@Component({
    selector: 'app-tickets-in-progress:not(1)',
    imports: [MatCardModule],
    templateUrl: './tickets-in-progress.component.html',
    styleUrl: './tickets-in-progress.component.scss'
})
export class TicketsInProgressComponent {

    constructor(
        private ticketsInProgressService: TicketsInProgressService
    ) {}

    ngOnInit(): void {
        this.ticketsInProgressService.loadChart();
    }

}