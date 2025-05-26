import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive, MatButtonModule, MatCardModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

}