import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-most-popular',
    imports: [RouterLink, NgClass, NgIf, MatCardModule, MatButtonModule],
    templateUrl: './most-popular.component.html',
    styleUrl: './most-popular.component.scss'
})
export class MostPopularComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}