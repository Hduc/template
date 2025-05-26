import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-channels',
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './top-channels.component.html',
    styleUrl: './top-channels.component.scss'
})
export class TopChannelsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}