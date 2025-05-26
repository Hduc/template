import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AssetAllocationService } from './asset-allocation.service';

@Component({
    selector: 'app-asset-allocation',
    imports: [MatCardModule],
    templateUrl: './asset-allocation.component.html',
    styleUrl: './asset-allocation.component.scss'
})
export class AssetAllocationComponent {

    constructor(
        private assetAllocationService: AssetAllocationService
    ) {}

    ngOnInit(): void {
        this.assetAllocationService.loadChart();
    }

}