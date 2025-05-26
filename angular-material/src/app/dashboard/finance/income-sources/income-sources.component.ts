import { Component } from '@angular/core';
import { IncomeSourcesService } from './income-sources.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-income-sources',
    imports: [MatCardModule],
    templateUrl: './income-sources.component.html',
    styleUrl: './income-sources.component.scss'
})
export class IncomeSourcesComponent {

    constructor(
        private incomeSourcesService: IncomeSourcesService
    ) {}

    ngOnInit(): void {
        this.incomeSourcesService.loadChart();
    }

}