import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-material-symbols',
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './material-symbols.component.html',
    styleUrl: './material-symbols.component.scss'
})
export class MaterialSymbolsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}