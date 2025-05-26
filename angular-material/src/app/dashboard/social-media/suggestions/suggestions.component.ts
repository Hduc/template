import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-suggestions',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './suggestions.component.html',
    styleUrl: './suggestions.component.scss'
})
export class SuggestionsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}