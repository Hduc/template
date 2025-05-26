import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-appointments',
    imports: [MatCardModule],
    templateUrl: './appointments.component.html',
    styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {}