import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-p-user-profile',
    imports: [RouterLink, NgIf],
    templateUrl: './p-user-profile.component.html',
    styleUrl: './p-user-profile.component.scss'
})
export class PUserProfileComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Card Header Menu
    isCardHeaderOpen = false;
    isCardHeaderOpen2 = false;
    toggleCardHeaderMenu() {
        this.isCardHeaderOpen = !this.isCardHeaderOpen;
    }
    toggleCardHeaderMenu2() {
        this.isCardHeaderOpen2 = !this.isCardHeaderOpen2;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.trezo-card-header-menu')) {
            this.isCardHeaderOpen = false;
        }
        if (!target.closest('.trezo-card-header-menu2')) {
            this.isCardHeaderOpen2 = false;
        }
    }

}