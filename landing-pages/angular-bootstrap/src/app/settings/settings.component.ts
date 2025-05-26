import { Component } from '@angular/core';
import { ToggleService } from './toggle.service';

@Component({
    selector: 'app-settings',
    imports: [],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss'
})
export class SettingsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public toggleService: ToggleService
    ) {
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.toggleService.toggleTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.toggleService.toggleRTLEnabledTheme();
    }

    // Settings Button Toggle
    toggle() {
        this.toggleService.toggle();
    }

}