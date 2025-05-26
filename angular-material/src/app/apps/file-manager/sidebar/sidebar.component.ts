import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive, MatCardModule, MatProgressBarModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}