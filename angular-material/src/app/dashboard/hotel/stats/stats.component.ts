import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { NewBookingsComponent } from './new-bookings/new-bookings.component';

@Component({
    selector: 'app-stats',
    imports: [MatCardModule, NewBookingsComponent, CheckInComponent, CheckOutComponent],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss'
})
export class StatsComponent {}