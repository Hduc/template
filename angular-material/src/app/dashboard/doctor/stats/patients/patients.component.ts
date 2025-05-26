import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-patients',
    imports: [MatCardModule],
    templateUrl: './patients.component.html',
    styleUrl: './patients.component.scss'
})
export class PatientsComponent {}