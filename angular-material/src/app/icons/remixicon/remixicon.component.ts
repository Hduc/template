import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-remixicon',
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './remixicon.component.html',
    styleUrl: './remixicon.component.scss'
})
export class RemixiconComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}