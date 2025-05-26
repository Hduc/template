import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-properties-by-country',
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './properties-by-country.component.html',
    styleUrl: './properties-by-country.component.scss'
})
export class PropertiesByCountryComponent {}