import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ClicksService } from './clicks.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-clicks',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './clicks.component.html',
    styleUrl: './clicks.component.scss'
})
export class ClicksComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private clicksService: ClicksService
    ) {}

    ngOnInit(): void {
        this.clicksService.loadChart();
    }

}