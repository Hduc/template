import { Component } from '@angular/core';
import { StatsComponent } from './stats/stats.component';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-welcome',
    imports: [StatsComponent, MatCardModule],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {}