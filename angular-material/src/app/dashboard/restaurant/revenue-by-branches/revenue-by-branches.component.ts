import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-revenue-by-branches',
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './revenue-by-branches.component.html',
    styleUrl: './revenue-by-branches.component.scss'
})
export class RevenueByBranchesComponent {}