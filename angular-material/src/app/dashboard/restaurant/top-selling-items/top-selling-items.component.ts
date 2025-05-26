import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-selling-items',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './top-selling-items.component.html',
    styleUrl: './top-selling-items.component.scss'
})
export class TopSellingItemsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}