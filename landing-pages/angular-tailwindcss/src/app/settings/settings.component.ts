import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ToggleService } from './toggle.service';

@Component({
    selector: 'app-settings',
    imports: [],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss'
})
export class SettingsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

    ngOnInit(): void {
        // Initialize theme and direction on component load
        this.toggleService.initializeTheme();
    }

    // Toggle theme between light and dark
    toggleTheme() {
        this.toggleService.toggleTheme();
    }

    // Toggle direction between LTR and RTL
    toggleDirection() {
        this.toggleService.toggleDirection();
    }

}