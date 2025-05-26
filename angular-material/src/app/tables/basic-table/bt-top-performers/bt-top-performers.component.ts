import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-bt-top-performers',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './bt-top-performers.component.html',
    styleUrl: './bt-top-performers.component.scss'
})
export class BtTopPerformersComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}